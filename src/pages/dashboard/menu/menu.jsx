import { MenuBackground } from "./menuStyle"
import editImg from "../../../assets/dashboard/edit.png"
import createdImg from "../../../assets/dashboard/created.png"
import listImg from "../../../assets/dashboard/list.png"
import { useContext } from "react"
import { ClientContext } from "../../../context/clientContext"

const MenuDash = () => { 
	const {setView} = useContext(ClientContext)

	return (
		<MenuBackground>
			<section>
				<button onClick={()=>setView("profile")}>
					<img src={editImg} alt="ilustração de edição" />
					Meu Perfil
				</button>
				<button onClick={()=>setView("created")}>
					<img src={createdImg} alt="ilustração de edição" />
					Criar Contato
				</button>
				<button onClick={()=>setView("list")}>
					<img src={listImg} alt="ilustração de edição" />
					Listar meus contatos
				</button>
			</section>
		</MenuBackground>
	)
}

export {MenuDash}