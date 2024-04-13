import Button from "../../ui/Button.jsx";
import {useFaraway} from "../../context/FarawayContext.jsx";
import Footer from "../../main/Footer.js";

const FarAwayFooter = () => {

  const {todos, dispatch} = useFaraway();

  const total = todos.length;
  const doneTodos = todos.map(todo => todo.checked)
    .filter(todo => todo === true).length
  const percentage = ((doneTodos/total)*100).toFixed(2);

  function handleClear(e) {
    e.preventDefault();
    dispatch({type:'resetTodos'})
  }
  return (
    <Footer>
      <div>준비한 것 /전체 개수 : {doneTodos}/{total}</div>
      <div>준비 완료: {percentage}% </div>
      <Button onClick={handleClear}>{percentage === '100.00' ? "떠나요.": '...준비중'}</Button>
    </Footer>
  );
};

export default FarAwayFooter;