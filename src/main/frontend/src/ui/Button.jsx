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
export const ButtonDelete = styled(Button)`
   color: var(--color-grey-100);
   font-size: 1.6rem;
   //width: 16rem;
   border: none;
   padding: 0 0.7rem;
   border-radius: 50%;
   background-color: var(--color-red-700);
   transition: all 0.5s;
   &:hover{
      background-color: var(--color-red-800);
      cursor: pointer;
   }
`;


export default Button;