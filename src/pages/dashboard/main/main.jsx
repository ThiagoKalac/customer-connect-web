import { useContext } from "react"

import { ClientContext } from "../../../context/clientContext"
import { Card } from "./card/card"
import { MainBackground } from "./mainStyle"


const MainDash = () => {
     const { client, view } = useContext(ClientContext)
     
     const nickname = client?.nickname
     const fullname = client?.fullName
     const email = client?.email
     const telephone = client?.telephone
     const telephonesExtra = client?.telephonesExtra
     const emailsExtra = client?.emailsExtra
     const contact = client?.contact
   


     return (
          <MainBackground>
               {
                    view === 'profile' ?
                    <Card
                         section={"Meu Perfil"}
                         nickname={nickname}
                         fullName={fullname}
                         email={email}
                         telephone={telephone}
                         telephonesExtra={telephonesExtra}
                         emailsExtra={emailsExtra}
                    />
                    :
                    view === 'created' ? <h1>CRIAR CONTATO</h1>
                    :
                    view === 'list' ? (contact?.map(contact => 
                         <div className="list" key={contact.id}>
                              <Card
                                      section={"Meus Contatos"}
                                      nickname={contact.nickname}
                                      fullName={contact.fullName}
                                      email={contact.email}
                                      telephone={contact.telephone}
                                      telephonesExtra={contact.telephonesExtra}
                                      emailsExtra={contact.telephonesExtra}
                              />
                                   
                         </div>
                    ))
                    :    
                    <p className="slogan">Organize sua vida em um só lugar - Gerencie seus contatos com facilidade!</p>          
               }
          </MainBackground>
     )
}

export {MainDash}