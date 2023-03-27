import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClientContext } from "../../context/clientContext"
import { ContainerDashboard, DashBackground } from "./dashboardStyle"
import { HeaderDash } from "./header/header"
import { MenuDash } from "./menu/menu"



const DashboardPage = () => {
     const navigate = useNavigate()
     const { name } = useParams()
     const {client, view} = useContext(ClientContext)
     
     const handleClientCorrect = () => {
          if (!client || client.nickname !== name) {
                navigate("/")
          }
     }
     handleClientCorrect()

     console.log(client)
     
     return (
          <DashBackground>
               <HeaderDash />
               <ContainerDashboard>
                    <MenuDash />
                    {
                         view === 'profile' ?
                              <div>
                                   <h1>Nome: {client.nickname}</h1>
                                   <p>Email: {client.email}</p>
                                   <p>Telefone: {client.telephone}</p>
                              </div>
                              :
                         view === 'created' ? <h1>CRIAR CONTATO</h1>
                              :
                                   view === 'list' ? (client?.contact.map(contact => 
                                        <div className="list" key={contact.id}>
                                             <h1>Nickname: {contact.nickname}</h1>   
                                             <p>Nome completo: {contact.fullName}</p>
                                             <p>Telefone: {contact.telephone}</p>
                                             <p>email: {contact.email}</p>
                                        </div>
                                   ))
                              :    
                         <h1>Organize sua vida em um só lugar - Gerencie seus contatos com facilidade!</h1>          
                    }
               </ContainerDashboard>
          </DashBackground>
     )
}

export {DashboardPage}