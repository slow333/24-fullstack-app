import styled from "styled-components";

const Button = styled.button`
   color: var(--color-grey-200);
   font-size: 1.6rem;
   //width: 16rem;
   border: 2px solid var(--color-grey-400);
   padding: 0.5rem 2rem;
   border-radius: 24px;
   background-color: var(--color-grey-600);
   transition: all 0.5s;
   &:hover{
      background-color: var(--color-grey-900);
      cursor: pointer;
   }
`;

export default Button;