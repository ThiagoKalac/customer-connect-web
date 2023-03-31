import { createContext, useContext } from "react";
import { toast, Flip } from "react-toastify";
import { updateContactApi } from "../services/requestContact";
import { ClientContext } from "./clientContext";

const ContactContext = createContext({});

const ContactProvider = ({ children }) => {
	const { setLoading } = useContext(ClientContext)
	
	const updateContact = async (data,token,id) => {
   	const loadingToast = toast.loading("Carregando...");
		setLoading(true)
    	try {
      	await updateContactApi(data,token,id);

      	toast.update(loadingToast, {
				render: `Cadastrado com sucesso`,
				type: "success",
				isLoading: false,
				autoClose: 2000,
				theme: "dark",
				position: "top-center",
				transition: Flip,
      	});
      
    	} catch (error) {
			console.log(error);
			toast.update(loadingToast, {
				render: error.response.data.message,
				type: "error",
				isLoading: false,
				autoClose: 2000,
				theme: "dark",
				position: "top-center",
				transition: Flip,
			});
		} finally {
			setLoading(false)
		}
  	};

  return (
	  <ContactContext.Provider value={{
			updateContact
	  }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
