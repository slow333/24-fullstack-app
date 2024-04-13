import tw from "tailwind-styled-components";
import Header from "../main/Header.jsx";
import styled from "styled-components";
import ContentFrame from "../main/ContentFrame.jsx";
import getHome from "../data/homeData.js";
import {useEffect, useState} from "react";
import axios from "axios";

const Ul = styled.ul`
   display: flex;
   flex-direction: column;
   justify-items: start;
   font-size: 1.6rem;
   width: 100%;
`
const Li = tw.li`
   list-disc text-3xl ms-8 mt-3 text-start
`
const Home = () => {
  const [hello, setHello] = useState("");
  const [kr, setKr] = useState('')
  const data = getHome();
  useEffect(() => {
    axios.get('http://localhost:8080/hello').then(res => setHello(res.data))
    axios.get('http://localhost:8080/kor').then(res => setKr(res.data))
  }, []);

  return (
    <>
      <Header  fontFamily='roboto' weight='600'>Main techs</Header>
      <ContentFrame>
        <Ul>
          {data.map(d => <Li key={d.id}>{d.content}</Li>)}
        </Ul>
        api에서 가져오기 : {hello}
        <div>{kr}</div>
      </ContentFrame>
    </>
  );
};

export default Home;