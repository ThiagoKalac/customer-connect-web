import styled from "styled-components";
import login from "../../assets/forms/login.png"

const LoginBackground = styled.div`
     background-color: var(--color-bg);
     width: 100vw;
     min-height: 100vh;
     background-image: url(${login});
     background-size: auto 100%;
     background-repeat: no-repeat;
     background-position: center;

     @media(min-width: 830px){
          & {
               background-position: right;
          }
     }
`


const Container = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     width: 100%;
     max-width: 1200px;
     height: 100%;
     margin: 0 auto;
     

     & > div {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          width: 100%;
          max-width: 600px;
          padding: 16px;
          animation: backInLeft 0.8s ease-out;
          

          & > button {
               padding: 8px 12px;
               border:none;
               border-radius: 4px;
               color: #171717;
               font-family: var(--text);
               background-color: var(--color-bg-button);
               filter:brightness(0.9);
               cursor: pointer;
               text-align: center;

               &:hover,&:focus,&:active{
                    filter:brightness(1.1);
                    transition: 0.2s ease-in-out;
               }

          }

          & > img {
               width:80px;
               height: 70px;
          }
     }
`

const LoginForm = styled.form`
     width: 100%;
     max-width: 600px;
     height: 324px;
     display: flex;
     flex-direction: column;
     gap:7px;
     padding: 16px;
     border-radius: 4px;
     background-color: ${({ dark }) => (dark ? "#2b3136b3" : "#b0b0b06e")};;
     position: relative;
     
   
     & > h2{
          font-family:var(--text);
          font-size: 18px;
          font-weight: var(--f-weight-1);
          letter-spacing: 1.5px;
          color: var(--gray-5);
          text-align: center;
          margin: 8px 18px 8px 0px;
     }

     & > label{
               font-family: var(--text);
               color: ${({ dark }) => (dark ? "#a5a5a5" : "#171717")};
               font-weight: var(--f-weight-2);
               margin-bottom: 6px;
     }

     .boxInputVisiblePassword{
          display: flex;
          flex-direction: column;
          position: relative;

          .iconVisiblePassaword{
               position: absolute;
               top: 6px;
               right: 13px;
               width: 28px;
               height: 28px;     
               color: var(--gray-1);
          }
     }

     & > button {
               background-color: var(--color-bg-button);
               border-style: none;
               height: 30px;
               border-radius: 4px;
               font-family: var(--text);
               font-weight: var(--f-weight-1);
               height: 40px;
               filter:brightness(0.8);

               &:hover,&:focus,&:active{
                    filter:brightness(1.1);
                    transition: 0.2s ease-in-out;
               }
     }    

     p {
               font-family: var(--text);
               font-weight: var(--f-weight-3);
               font-size: 14px;
               margin: 6px 0px;
               color: var(--color-text-errors);
               margin-top: -5px;
               margin-bottom: 12px;
     }
`


export {LoginBackground, Container, LoginForm}