import styled from "styled-components";

const ContentFrame = styled.div`
  //padding: 0 2rem;
   padding: ${props => props.padding};
   display: flex;
   flex-direction: column;
   justify-items: center;
   justify-content: start;
   align-content: center;
   align-items: center;
   margin: auto;
   height: 100%;
   width: 100%;
   gap: 1rem;
   overflow-y: auto;
`;

export default ContentFrame;