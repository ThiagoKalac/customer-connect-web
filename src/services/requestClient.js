import axios from "axios";


const baseUrl = axios.create({
  baseURL: "http://localhost:3000",
  setTimeout: 10000,
});


const clientRegisterApi = async (data) => {
  const createClient = await baseUrl.post("/client", data)
  return createClient
}

const sessionLoginApi = async (data) => {

  const token = await baseUrl.post("/login", data)
  return token
}

const getProfileClientApi = async (token) => {
  const client = await baseUrl.get("/client", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return client
}

const updateClientApi = async (token, data) => {
  console.log(token)
  const client = await fetch("http://localhost:3000/client", {
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

const deleteClientApi = async (token) => {
  const client = await baseUrl.delete("/client", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return client
}

export { clientRegisterApi, sessionLoginApi, getProfileClientApi,updateClientApi,deleteClientApi }