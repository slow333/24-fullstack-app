import styled from "styled-components";

const ContentFrame = styled.div`
  //padding: 0 2rem;
   padding: ${props => props.padding};
   display: flex;
   flex-direction: column;
   //justify-items: center;
   justify-content: start;
   //align-items: center;
   //margin: auto;
   height: 100%;
   gap: 1rem;
   overflow: auto;

    width: max-content;
    max-width: 86rem;
    min-width: 70rem;
    word-break: break-all;
`;

export default ContentFrame;