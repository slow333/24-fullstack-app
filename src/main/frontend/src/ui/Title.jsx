import styled from "styled-components";

const Title = styled.div`
   margin: ${props => props.margin};
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
   padding: 0.5rem 0;
   border-top: 2px solid currentColor;
   border-bottom: 2px solid currentColor;
   font-size: 2.4rem;
   text-transform: uppercase;
   letter-spacing: 3px;
   font-weight: 900;
   font-family: 'Roboto Mono', sans-serif;
`;


export default Title;