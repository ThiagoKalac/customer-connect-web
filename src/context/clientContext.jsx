import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { clientRegisterApi, sessionLoginApi, getProfileClientApi } from "../services/request";
import { toast, Flip } from "react-toastify";

const ClientContext = createContext({});

const ClientProvider = ({ children }) => { 
     const [client, setClient] = useState(null)

     const navigate = useNavigate()

     useEffect(() => {
          (async () => {
               const token = localStorage.getItem("@CustomerConnectToken")
               
               if (token) {
                    try {
                         const responseApi = await getProfileClientApi(token)
                         setClient(responseApi.data)
                         navigate(`/dashboard/${responseApi.data.nickname}`)
                         
                    } catch (error) {
                         console.log(error)
                         localStorage.removeItem("@CustomerConnectToken")
                         navigate("/")
                    } 
               } else {
                    navigate("/")
               }
          })()
     },[])


     const clientRegister = async (data) => {
          const loadingToast = toast.loading("Carregando...")

          try {
               
               await clientRegisterApi(data)
                              
               toast.update(loadingToast, {
                    render: `Cadastrado com sucesso`,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    transition: Flip
               });
               navigate("/login")

          } catch (error) {
               console.log(error.response.data.message)
               toast.update(loadingToast, {
                    render: error.response.data.message, 
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    transition: Flip
               });
               
          }
     }

     const sessionLogin = async (data) => { 
          const loadingToast = toast.loading("Carregando...")

          try {
               const responseToken = await sessionLoginApi(data)
               localStorage.setItem("@CustomerConnectToken",responseToken.data.token)
               
               const responseClient = await getProfileClientApi(responseToken.data.token)
               setClient(responseClient.data)
               
               toast.update(loadingToast, {
                    render: `Seja bem vindo ${responseClient.data.nickname}`,
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
               });
               
              
               navigate(`/dashboard/${responseClient.data.nickname}`)

          } catch (error) {
               toast.update(loadingToast, {
                    render: `Senha ou e-mail/nickname invalido`,
                    type: "error",
                    isLoading: false,
                    autoClose: 2000,
                    theme: "dark",
                    position: "top-center",
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Flip
               });
          }
     }
     return <ClientContext.Provider value={{
          clientRegister,
          sessionLogin,
          client
          }}>
          {children}
     </ClientContext.Provider>
}

export {ClientContext, ClientProvider}