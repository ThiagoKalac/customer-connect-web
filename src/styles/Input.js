import styled from "styled-components";

const Input = styled.input`

          outline: none;
          margin-bottom: 6px;
          padding: 8px;
          border: none;
          border-radius: 4px;
          font-family: var(--text);
          font-size: 16px; 
          color:var(--gray-5);
          background-color: var(--gray-2);

&::placeholder{
     color:var(--gray-5);
     font-family: var(--text);
     font-size: 16px; 
}

&:focus{
     outline: 2px solid var(--gray-5);
     color:var(--gray-5);
}
`

export { Input }