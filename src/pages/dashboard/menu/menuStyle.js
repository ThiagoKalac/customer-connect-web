import styled from "styled-components";

const MenuBackground = styled.main`
     width: 100%;
     height: fit-content;
     padding: 16px 0px;

     & > section {
          display: flex;
          flex-wrap:wrap;
          justify-content: space-evenly;
          gap: 8px;

          & > button {
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               gap: 12px;
               font-family: var(--text);
               font-weight: var(--f-weight-1);
               padding: 8px 0px;
               width: 100%;
               height: 146px;
               border-style: none;
               background-color: var(--color-bg-btn-dash);
               color: var(--gray-3);
               border-radius: 4px;
               filter: brightness(0.8);
               
               & > img {
                    width: 100px;
                    height: 100px;
               }
          }

          & > button:hover, button:active {
               transition: 0.3s ease-in-out;
               filter: brightness(1.1);
          }
     }

     @media(min-width: 469px){
          & {
               & > section {

                    & > button {
                         width: 215px;
                    }
               }
          }
     }
     @media(min-width: 769px){
          & {
               & > section {

                    & > button {
                         width: 30%;
                    }
               }
          }
     }
`

export {MenuBackground}