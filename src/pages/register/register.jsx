import { RegisterBackground, Container, RegisterForm } from "./registerStyle"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ConfigContext } from "../../context/configContext";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {  Section } from "./registerStyles";
import { Input } from "../../styles/Input";
import LogoLigth from "../../assets/logo/Ligth.png"
import LogoDark from "../../assets/logo/Dark.png"


const RegisterPage = () => {
     const {darkMode , handleDarkMode} = useContext(ConfigContext) 
     const navigate = useNavigate();    

     const { register, handleSubmit, formState: { errors } } = useForm({
          resolver: yupResolver(registerSchema),
     })

     const subimitRegisterUser = async (data) => {

          console.log(data)
         
     }

     return (
          <RegisterBackground>
               <Container>
                    <div>
                         <button onClick={() => handleDarkMode()}>Dark</button>
                         <img src={darkMode? LogoDark : LogoLigth } alt="logo Customer-Connect" />
                         <button  onClick={()=> navigate("/")}>Voltar</button>
                    </div>
                    <RegisterForm onSubmit={handleSubmit(subimitRegisterUser)} dark={darkMode}>
                         <h2>Crie sua conta</h2>
                         
                         <div className="registerForm_bg"/>
                         
                         <div className="registerForm_content">

                              <label htmlFor="nickname">Nickname:</label>
                              <Input type="text" placeholder=" Digite seu nome de usuario/apelido" {...register("nickname")} />
                              <p>{errors.nickname?.message}</p>

                              <label htmlFor="fullName">Nome completo:</label>
                              <Input placeholder=" Digite seu nome completo" {...register("fullName")} />
                              <p>{errors.fullName?.message}</p>

                              <label htmlFor="telephone">Telefone:</label>
                              <Input type="text" placeholder=" Digite seu telefone" {...register("telephone")} />
                              <p>{errors.telephone?.message}</p>

                              <label htmlFor="email">Email:</label>
                              <Input type="text" placeholder=" Digite seu melhor e-mail" {...register("email")} />
                              <p>{errors.email?.message}</p>

                              <label htmlFor="password">Senha</label>
                              <Input type="password" placeholder=" Digite uma senha segura" {...register("password")} />
                              <p>{errors.password?.message}</p>

                              <label htmlFor="confirmPassword">Confirmação de senha:</label>
                              <Input type="password" placeholder=" Digite uma senha segura" {...register("confirmPassword")} />
                              <p>{errors.confirmPassword?.message}</p>
                              
                              <button type="submit">Cadastrar</button>
                         </div>
                 
                    </RegisterForm>
               </Container>
          </RegisterBackground>
     )
}

export {RegisterPage}