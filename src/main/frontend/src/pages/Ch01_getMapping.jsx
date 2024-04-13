import React, {useEffect, useState} from 'react';
import Header from "../main/Header.jsx";
import Button from "../ui/Button.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import Footer from "../main/Footer.js";

const Advice = () => {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount(c => c + 1)
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <Header fontFamily='noto' weight='900'>Advices</Header>
      <ContentFrame>
        <h1>{advice}</h1>
        <h3>you got {count} advices</h3>
      </ContentFrame>
      <Footer>

        <Button onClick={getAdvice}>get advice</Button>
      </Footer>
    </>
  );
};

export default Advice;