/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState} from "react";
import ConnectedWorld from "../assets/carousel/connected_world.gif"
import ConnectedWorldDark from "../assets/carousel/connected_world_dark.gif"
import Add from "../assets/carousel/add.gif"
import AddDark from "../assets/carousel/add_dark.gif"
import Connected from "../assets/carousel/connected.gif"
import ConnectedDark from "../assets/carousel/connected_dark.gif"


const ConfigContext = createContext({});

const ConfigProvider = ({ children }) => {
     const [darkMode, setDarkMode] = useState(false);
     const [indexImg, setIndexImg] = useState(0)
  


     useEffect(() => {
       verifyDarkModeLocalStorage();
     }, []);
     
     useEffect(() => {
      const interval = setInterval(() => {
           setIndexImg((prevIndex) => (prevIndex + 1) % indexImg.length);
      }, 10000);
      return () => clearInterval(interval);
    }, [indexImg]);
      
     const verifyDarkModeLocalStorage = () => {
       const dark = localStorage.getItem("@CustommerConnectDarkMode");
   
       if (dark === "true") {
         document.querySelector("html")?.classList.add("dark");
         setDarkMode(true);
       }
     };
   
     const handleDarkMode = () => {
       if (darkMode) {
         setDarkMode(false);
         localStorage.setItem("@CustommerConnectDarkMode", false);
         document.querySelector("html")?.classList.remove("dark");
       } else {
         setDarkMode(true);
         localStorage.setItem("@CustommerConnectDarkMode", true);
         document.querySelector("html")?.classList.add("dark");
       }
     };
   
     
         
     const imagesCarousel = [
      {
           src: darkMode? ConnectedWorldDark : ConnectedWorld,
           alt: 'Adicione',
           caption: 'Adicione e gerencie',
      },
      {
           src: darkMode? AddDark : Add,
           alt: 'Mundo Conectado',
           caption: 'todos seu contatos em um só lugar',
      },
      {
           src: darkMode? ConnectedDark : Connected,
           alt: 'Mundo Conectado 2',
           caption: 'Customer Connect',
      },
 ]

    
  
  
     return (
       <ConfigContext.Provider
         value={{
           darkMode,
           handleDarkMode,
           indexImg,
           setIndexImg,
           imagesCarousel
         }}
       >
         {children}
       </ConfigContext.Provider>
     );
};
   

export { ConfigContext , ConfigProvider }