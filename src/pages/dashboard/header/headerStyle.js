import styled from "styled-components";

const HeaderBackground = styled.header`
     background-color: var(--color-bg-section);
     width: 100vw;
     height: 80px;
     box-shadow:  -1px 2px 6px 1px var(--color-shadow-landinpage);
`

const HeaderContent = styled.div`
     width: 100%;
     max-width: 1200px;
     height: 100%;
     margin: 0 auto;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0px 16px;

     & > h1{
          font-family: var(--text);
          font-size: 18px;
          font-weight: var(--f-weight-2);
          color: var(--gray-5);

          & > span {
               color: var( --color-text-welcome);
               font-weight: var(--f-weight-1);
          }
     }
     
     & > nav{
          display: flex;
          gap: 5px;
          justify-content: flex-end;

          & > button{
               border-style: none;
               padding: 4px;
               border-radius: 5px;
               font-family: var(--text);
               font-size: 16px;
               font-weight: var(--f-weight-2);
               width: 77px;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               white-space: nowrap;
               transition: 0.4s ease-in-out;

               & > svg{
                    width: 25px;
                    height: 25px;
               }
          }

          & > .btn-logout{
               background-color: #a72b37;
               color: whitesmoke;
          }    

          & > .btn-dark{
               background-color: #6c6a6a;
               color: var(--gray-5); 
               & > svg{
                    color: var(--color-btn-dark);
               }
          }

          & > button:hover{
               transition: 0.4s ease-in-out;
               filter: brightness(1.2);
          }
     }
`

export {HeaderBackground, HeaderContent}