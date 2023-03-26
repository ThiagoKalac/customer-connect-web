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

export { clientRegisterApi, sessionLoginApi, getProfileClientApi }