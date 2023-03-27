import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClientContext } from "../../context/clientContext"
import { HeaderDash } from "./header/header"



const DashboardPage = () => {
     const navigate = useNavigate()
     const { name } = useParams()
     const {client} = useContext(ClientContext)
     
     const handleClientCorrect = () => {
          if (!client || client.nickname !== name) {
                navigate("/")
          }
     }
     handleClientCorrect()



     return (
          <>
               <HeaderDash/>
          </>
     )
}

export {DashboardPage}