import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
   border-top: ${props => props.active === "on" ? '18px solid greenyellow': ""};
   //width: 90%;
   background-color: white;
   color: #1f2937;
   margin-top: 2rem;
   box-shadow: 5px 8px 4px 2px #9ca3af;
   //background-color: #76c7ad;
`
const Heading = styled.div`
   color: ${props => props.active === "on" ? 'green': ""};
   padding: 2rem;
   font-size: 2rem;
   display: flex;
   justify-content: space-between;
   justify-items: baseline;
   width: 70rem;

   &:hover {
      cursor: pointer;
      background-color: #9ca3af;
   }
`
const Content = styled.div`
 width: 60rem;
   margin: 2rem 3rem;
`

function Accordian({poem, currOpen, setCurrOpen}){
  const {id, title, poetry} = poem;
  let isOpen = id === currOpen;

  function handleOpen(id) {
    // if(isOpen) setCurrOpen(0);
    // else setCurrOpen(id)
    setCurrOpen(isOpen ? false : id)
  }

  return (
    <Container  active={isOpen ? "on": ""}>
      <Heading onClick={() => handleOpen(id)} active={isOpen ? "on": ""}>
        <div>
          <span className='pe-4'>0{id}</span>
          <span>{title}</span>
        </div>
        <button>{isOpen ? "-" : "+"}</button>
      </Heading>
      {isOpen && <Content>
        {poetry}
      </Content>}
    </Container>
  )
}
export default Accordian;