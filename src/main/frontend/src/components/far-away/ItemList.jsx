import React, {useEffect, useState} from 'react';
import {useFaraway} from "../../context/FarawayContext.jsx";

import Todo from "./Todo.jsx";
import Footer from "./FarAwayFooter.jsx";
import styled from "styled-components";
import StyledSelect from "../../ui/StyledSelect.jsx";

const TodosContainer = styled.ul`
   list-style: none;
   width: 90%;
   overflow: hidden;

   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 1.2rem;
   justify-content: center;
   align-content: start;
`;

const ItemList = () => {
  const { dispatch, sortedTodos} = useFaraway();

  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    dispatch({type: 'setSortBy', payload: sortBy})
    dispatch({type: 'sort'})
  },[sortBy])

  return (
    <>
      {sortedTodos &&
        <TodosContainer>
          {sortedTodos.map((item) =>
            <Todo key={item.id} item={item}/>)}
        </TodosContainer>
      }
        <StyledSelect
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}>
          <option value='input'>정렬 순서</option>
          <option value='num'>Num</option>
          <option value='item'>Item</option>
        </StyledSelect>
    </>
  );
};

export default ItemList;