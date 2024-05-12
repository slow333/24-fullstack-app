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

    width: auto;
    //max-width: 90rem;
    //min-width: 90rem;
    word-break: normal;
`;

export default ContentFrame;