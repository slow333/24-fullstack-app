import styled from "styled-components";

const ButtonRound = styled.button`
   background-image: radial-gradient(circle, rgba(22, 22, 22, 0.5) 50%, rgba(222, 222, 222, 0.6) 90%);
   width: 36px;
   height: 36px;
   border: none;
   color: white;
   text-align: center;
   display: inline-block;
   font-size: 16px;
   margin: 4px 8px;
   cursor: pointer;
   border-radius: 50%;
   transition: all 0.4s;

   &:hover {
      background-image: radial-gradient(circle, rgba(222, 222, 222, 0.6) 50%, rgba(22, 22, 22, 0.5) 90%);
      //box-shadow: 0 0 4px 4px #dcdcde;
   }
`;

export default ButtonRound;