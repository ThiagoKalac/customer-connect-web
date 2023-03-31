import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../../styles/Input"
import { loginSchema } from "./loginSchema"
import { LoginBackground, LoginForm, Container } from "./loginStyle"
import { MdOutlineVisibility as Visible, MdOutlineVisibilityOff as VisibleOff} from "react-icons/md"; 
import LogoLigth from "../../assets/logo/Ligth.png"
import LogoDark from "../../assets/logo/Dark.png"
import { useContext } from "react";
import { ConfigContext } from "../../context/configContext";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../context/clientContext";

const Login = () => {
	const [typeInput, setTypeInput] = useState("password")
	const { darkMode, handleDarkMode } = useContext(ConfigContext) 
	const {sessionLogin} = useContext(ClientContext)
	
	const navigate = useNavigate();
	const { register, handleSubmit , formState:{errors} } = useForm({
		resolver: yupResolver(loginSchema),
	})

	const seePassword = (boolean) => {
		return boolean? setTypeInput("text") : setTypeInput("password")
	}

	const subimitLogin = async (data) => {

		sessionLogin(data)
	    
	}

	return (
		<LoginBackground>
			<Container>
				<div>
					<button onClick={() => handleDarkMode()}>Dark</button>
					<img src={darkMode? LogoDark : LogoLigth } alt="logo Customer-Connect" />
					<button onClick={()=> navigate(-1)}>Voltar</button>
				</div>

				<LoginForm onSubmit={handleSubmit(subimitLogin)} dark={darkMode}>
					<h2>Faça Login</h2>

					<label htmlFor="emailOrNickname">Email ou Nickname</label>
					<Input placeholder=" Digite seu e-mail ou seu nickname"  {...register("emailOrNickname")} />
					<p className="textError">{errors.emailOrNickname?.message}</p>

					<label htmlFor="password">Senha</label>
					<div className="boxInputVisiblePassword">
						<Input
							type={typeInput}
							{...register("password")}
							placeholder=" Digite sua senha"
						/>
						<p className="textError">{errors.password?.message}</p>
						{
						typeInput === "text"?
							<Visible className="iconVisiblePassaword" onClick={()=>seePassword(false)} />
							:
							<VisibleOff className="iconVisiblePassaword" onClick={()=>seePassword(true)} />
						}
					</div>

					<button type="submit">Login</button>
				</LoginForm>
		
			</Container>
		</LoginBackground>
	)
}

export {Login}