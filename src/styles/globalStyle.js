import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
     --brand-color:#00b630;
     --color-bg: #ffffff;
     --color-btn-dark: #343434;
     --color-shadow-landinpage: #6c757d;
     --color-bg-button: #20c997;
    
     /* Shades of gray  */
     --gray-0: #ffffff;
     --gray-1: #ececec;
     --gray-2: #a5a5a5;
     --gray-3: #5e5e5e;
     --gray-4: #343434;
     --gray-5: #171717;

     /* fonts */
     --f-logo-1:'Ruda', sans-serif;
     --f-logo-2:'Gugi', cursive;
     --text  :'Roboto Mono', monospace;

     /* font-weigth */
     --f-weight-1:700;
     --f-weight-2:600;
     --f-weight-3:400;
     --f-weight-4:100;

   
}

:root.dark{
     --brand-color: #00ff43;
     --color-bg: #191919;
     --color-btn-dark: #dacf04;
     --color-shadow-landinpage: #343a40;
     --color-bg-button: #00ff43;
     
     /* Shades of gray */
     --gray-0: #171717;
     --gray-1: #343434;
     --gray-2: #5e5e5e;
     --gray-3: #a5a5a5;
     --gray-4: #ececec;
     --gray-5: #ffffff;
}


`

export {GlobalStyle}