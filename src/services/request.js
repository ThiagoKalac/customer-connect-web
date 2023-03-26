import axios from "axios";


const baseUrl = axios.create({
  baseURL: "http://localhost:3000",
  setTimeout: 10000,
});


const registerClient = async (data) => {
     const createClient = await baseUrl.post("/client", data)
     return createClient
}

export {registerClient}