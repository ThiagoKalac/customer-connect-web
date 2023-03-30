import styled from "styled-components";

const MainBackground = styled.main`
     width: 100%;
     height: 64vh;
     display: flex;
     align-items: center;
     background-color: var(--gray-1);
     overflow: auto;

     & > .slogan{
         font-family: var(--text);
         font-size: 26px;
         color: var(--gray-3);
         letter-spacing: 1.3px;
         line-height: 70px;
         text-align: center;
     }
`

export {MainBackground}