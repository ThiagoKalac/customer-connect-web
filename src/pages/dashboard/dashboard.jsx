import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClientContext } from "../../context/clientContext"
import { ContainerDashboard, DashBackground } from "./dashboardStyle"
import { HeaderDash } from "./header/header"
import { MainDash } from "./main/main"
import { MenuDash } from "./menu/menu"



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
          <DashBackground>
               <HeaderDash />
               <ContainerDashboard>
                    <MenuDash />
                    <div />
                    <MainDash/>
               </ContainerDashboard>
          </DashBackground>
     )
}

export {DashboardPage}