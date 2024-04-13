import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import React, {useState} from "react";
import Accordian from "../components/accordians/Accordian.jsx";
import getPoems from "../data/Poems.js";

const Accordions = () => {
  const poems = getPoems();
  // console.log(poems)
  const [currOpen, setCurrOpen] = useState(0)
  return (
    <>
      <Header family='roboto' weight='600'>Accordion</Header>
      <ContentFrame padding="1rem 2rem">
        {poems.map(poem =>
          <Accordian poem={poem} key={poem.id} currOpen={currOpen} setCurrOpen={setCurrOpen}/>)}
      </ContentFrame>
    </>
  );
};

export default Accordions;