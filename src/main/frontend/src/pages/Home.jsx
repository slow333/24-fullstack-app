import tw from "tailwind-styled-components";
import Header from "../main/Header.jsx";
import styled from "styled-components";
import ContentFrame from "../main/ContentFrame.jsx";
import {useEffect, useState} from "react";
import {BASE_URL} from "../components/config/config";

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-items: start;
    font-size: 1.6rem;
    width: 100%;
    padding: 1rem;
`
const Li = styled.li`
   padding: 9px;
`
const Home = () => {
  const [hello, setHello] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}/hello`);
        if (!res.ok) throw new Error("no data 🤣🤣🤣🤣🤣🤣🤣")
        const data = await res.text();
        setHello(data)
      } catch (e) {
        console.log(e.message)
      }
    }
    fetchData();
    // fetch('http://localhost:8080/kor').then(res => setKr(res.data))
  }, []);

  return (
    <>
      <Header fontFamily='roboto' weight='600'>Backend: Spring boot, Frontend: React</Header>
      <ContentFrame>
        <Ul>
          <Li>Spring boot를 활용한 api 개발 및 React를 활용한 Front end</Li>
          <Li>하나의 프로젝트로 frontend backend를 같이 구현</Li>
          <Li>DBMS는 mysql를 활용</Li>
          <Li>youtube: 스프링 부트(Spring Boot) 기초 강의 몰아보기</Li>
          <Li>어라운드 허브 스튜디오 - Around Hub Studio</Li>
          <div>https://www.youtube.com/watch?v=7t6tQ4KV37g</div>
        </Ul>
        
        api에서 가져오기 : {hello}
      </ContentFrame>
    </>
  );
};

export default Home;