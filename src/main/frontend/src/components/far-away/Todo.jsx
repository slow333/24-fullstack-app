import styled from "styled-components";
import {useFaraway} from "../../context/FarawayContext.jsx";
import Input from "../../ui/Input.jsx";

const StyledTodo = styled.div`
   font-size: 1.8rem;
   display: flex;
   align-items: center;
   gap: 1.2rem;
`;

const Todo = ({item}) => {

  const{todos, dispatch, checked} = useFaraway();

  const isChecked = item.id === todos.filter(todo => todo.id === item.id).id

  function toggleCheck(id) {
    dispatch({type:'toggleCheck', payload: id})
  }
  function handleDelete(id) {
    dispatch({type: "deleteTodo", payload: id})
  }

  return (
    <StyledTodo>
      <div className={`${isChecked ? 'italic line-through' : ''}`}>
      {item.num} : {item.item}
      </div>
      <Input type='checkbox' checked={checked}
             onChange={() => toggleCheck(item.id)}/>
      <button onClick={() => handleDelete(item.id)}
              className='text-3xl text-red-600'>X</button>
    </StyledTodo>
  );
};

export default Todo;