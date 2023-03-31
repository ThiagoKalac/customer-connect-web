import axios from "axios";


const baseUrl = axios.create({
	baseURL: "http://localhost:3000",
	setTimeout: 10000,
});

const updateContactApi = async (data, token, id) => {
   console.log(token)
   const client = await fetch(`http://localhost:3000/contact/${id}`, {
      method: "PATCH",
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
   }).then(res => res.json())
      .catch(erros => console.log(erros))

   return client
}


export { updateContactApi }