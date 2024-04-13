import React from 'react';
import Header from "../main/Header.jsx";
import '../styles/pizza-index.css'
import Title from "../ui/Title.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import {Pre, Result} from "./Ch01_getMapping";


const Ch03_putApi = () => {
  return (
    <>
      <Header family='roboto' weight='600'>Put api </Header>
      <ContentFrame padding="1rem 2rem">
        <Title margin='3rem 1rem'>@PutMapping</Title>

        <h3>@PutMapping</h3>

        <div>리소스를 추가하기 위해 사용되는 API => @PostMapping</div>
        <div>@RequestBody를 이용해서 body에 담겨있는 값을 받아야함</div>
        <hr/>


        <Pre>{`@PutMapping("/default")
  public String putDefault() {
  return "default value with no args"  }
  `}</Pre>
        <Result>from postMapping no argument =>
          <span className='text-amber-500'> {'noArg'}</span>
        </Result>



      </ContentFrame>
    </>
  );
};

export default Ch03_putApi;