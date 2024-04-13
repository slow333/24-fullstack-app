import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Button from "../../ui/Button.jsx";
import {useFaraway} from "../../context/FarawayContext.jsx";
import Input from "../../ui/Input.jsx";
import StyledSelect from "../../ui/StyledSelect.jsx";
import Title from "../../ui/Title.jsx";

const UlRow = styled.ul`
   //position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 3rem;
   width: 100%;
   background-color: #4b5563;
   padding: 2rem 0;
   margin: 0;
   font-size: 1.2rem;
`;

const StyledForm = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
   color: #4f46e5;
`;

function FormItems() {
  const {todos, dispatch} = useFaraway();
  const [todo, setTodo] = useState({item: '', num: 0});

  useEffect(() => {
    if (todos.length < 1) return;
    localStorage.setItem('travel', JSON.stringify(todos));
    dispatch({type: 'sort'})
  }, [todos])
  useEffect(() => {
    const lcItems = localStorage.getItem('travel');
    if (!lcItems) return;
    const items = JSON.parse(lcItems)
    dispatch({type: 'setTodos', payload: items})
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: 'addTodos', payload: todo})
  }

  function handleChange(e) {
    e.preventDefault();
    setTodo(todo => {
      return {...todo, [e.target.name]: e.target.value}
    })
  }

  return (
    <>
      <Title>여행을 떠나요</Title>
      <UlRow>
        <div className='text-3xl text-stone-100'>여행 준비물을 챙기세요</div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledSelect name='num' onChange={handleChange} value={todo.num}>
            <option value=''>개수 선택</option>
            {Array.from({length: 10}, (_, idx) =>
              <option key={idx} value={idx + 1}>{idx + 1}</option>)}
          </StyledSelect>
          <Input name='item' onChange={handleChange} value={todo.item}/>
          <Button> ADD </Button>
        </StyledForm>
      </UlRow>
    </>
  );
};

export default FormItems;