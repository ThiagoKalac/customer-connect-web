import styled from "styled-components";

const DashBackground = styled.div`
     width: 100vw;
     height: 100vh;
     background-color: var(--color-bg);
`


const ContainerDashboard = styled.div`
     width: 100%;
     max-width: 1200px;
     margin: 24px auto;
     border-radius: 6px;
     background-color: var(--gray-1);

     & > div{
          background-color: var(--gray-0);
          height: 50px;
          width: 100%;
     }   
     
     & > .list{
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-bottom: 2px solid black;
          padding: 8px 0px;
     }
`

export {DashBackground, ContainerDashboard}