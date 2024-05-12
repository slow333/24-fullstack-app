import React, {useEffect, useState} from 'react';
import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import styled from "styled-components";
import {BASE_URL} from "../components/config/config";
import axios from "axios";

export const Pre = styled.pre`
    text-align: start;
    padding: 4px 0 0 6px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1px;
    word-spacing: 2px;
`
export const Result = styled.div`
    color: #edc84b;
    font-size: 1.8rem;
    margin-bottom: 2.6rem;
`
const Ch01_getMapping = () => {
  const [name, setName] = useState("");
  const [hello, setHello] = useState("");
  const [variable, setVariable]= useState("")
  const [person, setPerson]= useState("");
  const [requestParamMap, setRequestParamMap] = useState("")
  const [requestParamDto, setRequestParamDto] = useState("")
  const [requestParamDtoObj, setRequestParamDtoObj] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/get-api/hello`)
      .then(res => setHello(res.data))
    axios.get(`${BASE_URL}/get-api/name`)
      .then(res => setName(res.data))
    axios.get(`${BASE_URL}/get-api/variable1/url 변수에 포함된 값`)
      .then(res => setVariable(res.data))
    axios.get(`${BASE_URL}/get-api/request-param?name=kim&email=socool@sos.com&memo=from request param 고정된 변수`)
      .then(res => {
        // console.log(JSON.parse(res.data));
        setPerson(res.data);
      })
    axios.get(`${BASE_URL}/get-api/request-param-map?name=kim map&email=socool@sos.com map&com=mycom&memo=변수가 많아서 뭔지모를 때`)
      .then(res => setRequestParamMap(res.data))
    axios.get(`${BASE_URL}/get-api/request-param-dto?name=kim by dto&email=socool@sos.com by dto&id=369369&memo=dto 객체를 통해 받아서 처리할 때`)
      .then(res => setRequestParamDto(res.data))
  }, []);

  return (
    <>
      <Header fontFamily='noto' weight='900'>How to get method</Header>
      <ContentFrame padding="8px 10px 0 10px">
        <h3 className="text-red-500">
          axios를 안쓰고 그냥 fetch를 사용할 경우에는 text 형태의 return 값은 받을 때 res.text()를 해주어야 함
        </h3>
        <h2>@RequestMapping</h2>
        <Pre>{`@RequestMapping(value="/name", method=RequestMethod.GET)
  public String getHello() {
  return "나는 김입니다" }
        `}</Pre>
        <Result>from RequestMapping => <span className='text-amber-500'>{name}</span></Result>

        <h2>@GetMapping</h2>
        <Pre>{`@GetMapping("/hello")
  public String getHello() {
  return "hello 안녕하세요."  }
  `}</Pre>
        <Result>from getMapping =>
          <span className='text-amber-500'>{hello}</span></Result>

        <h2>@PathVariable</h2>
        <Pre>{`@GetMapping("/variable/{var}")
  public String getVariable(@PathVariable String var) {
  return var;    }
        `}</Pre>
        <Result>from getMapping, path/{variable} @PathVariable =>
          <div><span className='text-amber-500 '>{variable}</span></div>
        </Result>

        <h2>@RequestParam</h2>
        <Pre>{`public String getRequestParam(
  @RequestParam String name,
  @RequestParam String email,
  @RequestParam String org,
   ) {
     return name + " : "+ email+ " => "+ org;
   }
        `}</Pre>
        <Result>from getMapping, request param =>
          <div><span className='text-amber-500'>{person}</span></div>
        </Result>

        <h2>@RequestParam using Map and forEach</h2>
        <Pre>{`@GetMapping("/request")
   public String getRequestParam(
     @RequestParam Map<String, String> param)  ) {
   StringBuilder sb = new StringBuilder();
   param.forEach((key, value) ->
     sb.append(key + " : " + value + "\\n")
   )
     return sb.toString();
   }
        `}</Pre>
        <Result>from getMapping, request param to map forEach =>
          <div><span className='text-amber-500'>{requestParamMap}</span></div>
        </Result>

        <h2>DTO</h2>
        <Pre>{`public String getRequestParamDto(MemberDTO dto) {
     return dto.toString;
   }
public class MemberDTO {
   private String name;
   private String email;
   private String org;
   // .. get set toString method override
   }
        `}</Pre>
      </ContentFrame>
    </>
  );
};

export default Ch01_getMapping;