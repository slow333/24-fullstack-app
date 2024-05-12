import React from 'react';
import Header from "../main/Header.jsx";
import Title from "../ui/Title.jsx";
import ContentFrame from "../main/ContentFrame";

const Ch09_swagger = () => {

  return (
    <>
      <Header fontFamily='roboto' weight='600'>Swagger</Header>
      <ContentFrame>
        <Title>Swagger library(안됨 실패함, 버젼 문제인 듯함)</Title>
        <div>서버로 요청되는 api list를 HTML 화면으로 문서화하여 테스트 할수 있는 라이브러리</div>
        <div>서버가 가동되면서 @RestController를 읽어서 API를 분석하여 HTML 문서를 작성함</div>
        <a href="https://mvnrepository.com/artifact/io.springfox/springfox-swagger2">
          swagger maven repository
        </a>
        <a href="https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui">
          swagger UI maven repository
        </a>


      </ContentFrame>
    </>
  );
};

export default Ch09_swagger;