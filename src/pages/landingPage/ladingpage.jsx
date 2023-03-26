import { ContainerLandingPage, Header, Main } from "./ladinPageStyle"
import LogoLigth from "../../assets/logo/Ligth.png"
import LogoDark from "../../assets/logo/Dark.png"
import { useContext } from "react"
import { ConfigContext } from "../../context/configContext"
import { MdLightbulb as Bulb } from "react-icons/md"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
     const {darkMode,handleDarkMode,indexImg,setIndexImg,imagesCarousel} = useContext(ConfigContext) 
     const navigate = useNavigate();    

     return (
          <ContainerLandingPage>
               <Header dark={darkMode}>
                    <figure>
                         <img src={darkMode? LogoDark : LogoLigth } alt="logo Customer-Connect" />
                         <p>Customer</p>
                         <span>CONNECT</span>
                    </figure>
                    <button onClick={()=>handleDarkMode()}><Bulb/> {darkMode? 'Ligth': 'Dark'}</button>
               </Header>
               <Main dark={darkMode}>
                    <section>
                         <Carousel activeIndex={indexImg} onSelect={setIndexImg}>
                              {imagesCarousel.map((image, i) => (
                              <Carousel.Item key={i}>
                                   <img src={image.src} alt={image.alt} />
                                   <Carousel.Caption>
                                   <h3>{image.caption}</h3>
                                   </Carousel.Caption>
                              </Carousel.Item>
                              ))}
                         </Carousel>
                    </section>
                    <div className="containerBtns">
                         <button onClick={()=> navigate("/login")}>Login</button>
                         <span>Ainda não é cadastrado?</span>
                         <button onClick={()=> navigate("/register")}>Cadastre-se</button>
                    </div>
               </Main>
          </ContainerLandingPage>
     )
}

export { LandingPage }
