import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ConfigContext } from "../../../context/configContext"
import { HeaderBackground, HeaderContent } from "./headerStyle"
import { RiLogoutBoxRFill as Logout } from "react-icons/ri"
import { MdLightbulb as Bulb } from "react-icons/md"


const HeaderDash = () => {
     const {darkMode,handleDarkMode} = useContext(ConfigContext)
     const navigate = useNavigate()
     const {name} = useParams()


     const handleLogout = () => {
          localStorage.removeItem("@CustomerConnectToken")     
          navigate("/")
     }

     return (
          <HeaderBackground>
               <HeaderContent>
                    <h1> Bem vindo
                         <span>  {name.charAt(0).toUpperCase() + name.substring(1)} </span>
                    </h1>
                    <nav>
                         <button onClick={() => handleDarkMode()} className="btn-dark">
                              <Bulb />
                              {darkMode ? "Dark" : "Light"}
                         </button>
                         <button onClick={() => handleLogout()} className="btn-logout">
                              <Logout />
                              Sair
                         </button>
                    </nav>
               </HeaderContent>
               
          </HeaderBackground>
     )
} 

export { HeaderDash}