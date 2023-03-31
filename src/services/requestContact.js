import axios from "axios";


const baseUrl = axios.create({
	baseURL: "http://localhost:3000",
	setTimeout: 10000,
});

const updateContactApi = async (data, token, id) => {
   
   const client = await fetch(`http://localhost:3000/contact/${id}`, {
	 method: "PATCH",
	 headers: {
	    "Content-Type": "application/json",
	    Authorization: `Bearer ${token}`
	 },
	 body: JSON.stringify(data)
   }).then(res => res.json())
	 .catch(erros => console.log(erros))

   return client
}

const deleteContactApi = async (token, id) => {
  
	const response = await baseUrl.delete(`/contact/${id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
	})

   return response
}

const createdContactApi = async (data, token) => {
	console.log(data)
	const contact = await fetch("http://localhost:3000/contact/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(data)
	})
		.then((resp) => resp.json())
		.catch((err) => console.error(err))

	return contact
}


export { updateContactApi, deleteContactApi, createdContactApi }