import React, {useEffect, useState} from 'react';
import Header from "../main/Header.jsx";
import ContentFrame from "../main/ContentFrame.jsx";
import {Pre, Result} from "./Ch01_getMapping";
import axios from "axios";
import {BASE_URL} from "../components/config/config";

const Ch02_postApi = () => {
  const [member, setMember] = useState();
  const [noArg, setNoArg] = useState('');
  const [fromDto, setFromDto] =useState("")

  useEffect(() => {
    axios.post(`${BASE_URL}/post-api/default`)
      .then(res => setNoArg(res.data))
    axios.post(`${BASE_URL}/post-api/member`, {
      username: "post man",
      password: "ring the bell"
    })
      .then(res => setMember(res.data))
    axios.post(`${BASE_URL}/post-api/member-dto`,{
      name: "post dto", email: "dto@dot.com", memo: "dto를 통해서 절달하는 방식"
    })
      .then(res => setFromDto(res.data))
  }, []);

  return (
    <>
      <Header  fontFamily='roboto' weight='600'>Post API PostMapping</Header>
      <ContentFrame padding='2rem 1rem'>
        <h3>@PostMapping</h3>

        <div>리소스를 추가하기 위해 사용되는 API => @PostMapping</div>
        <div>@RequestBody를 이용해서 body에 담겨있는 값을 받아야함</div>
        <hr/>
        <Pre>{`@PostMapping("/default")
  public String postDefault() {
  return "default value with no args"  }
  `}</Pre>
        <Result>from postMapping no argument =>
          <span className='text-amber-500'> {noArg}</span>
        </Result>

        <Pre>{`@PostMapping("/member")
  public String postMember(
  @RequestBody Map<String, Object> postData
  ) {
  StringBuilder sb = new StringBuilder();
  postData.entrySet().forEach(map ->
    sb.append("key :" + map.getKey() + ", value :"+ map.getValue() + "\\n") )
  return sb.toString()  }
  `}</Pre>
        <Result>from postMapping =>
          <span className='text-amber-500'> {member}</span>
        </Result>

        <Pre>{`@PostMapping("/member-dto")
  public String postMember2( @RequestBody MemberDTO memberDTO ) {
  return memberDTO.toString();  }
  `}</Pre>
        <Result>from postMapping using dto =>
          <span className='text-amber-500'> {fromDto}</span>
          <div>dto에 없는 값은 무시됨</div>
        </Result>


      </ContentFrame>
    </>
  );
};

export default Ch02_postApi;