import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { registerClient } from "../services/request";
import { toast, Flip } from "react-toastify";

const ClientContext = createContext({});

const ClientProvider = ({ children }) => { 
     const navigate = useNavigate()

     const clientRegister = async (data) => {
          const loadingToast = toast.loading("Carregando...")

          try {
               
               await registerClient(data)
                              
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


     return <ClientContext.Provider value={{
               clientRegister
          }}>
          {children}
     </ClientContext.Provider>
}

export {ClientContext, ClientProvider}