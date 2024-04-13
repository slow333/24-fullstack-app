import {createContext, useContext, useReducer} from "react";
import {v4 as uuidv4} from "uuid";

const FarawayContext = createContext()

const initialState = { todos:[], sortedTodos:[] }

function reducer(state, action){
  switch (action.type) {
    case 'addTodos':
      return {
        ...state,
        todos: [...state.todos, {...action.payload, id:uuidv4() }],
        sortedTodos: [...state.todos],
      }
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'setTodos':
      return {
        ...state,
        todos: action.payload,
        sortedTodos: state.todos,
      }
    case 'toggleCheck' :
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload ? {...todo, checked: !todo.checked} : todo;
        }),
        sortedTodos: [...state.todos]
      }
    case "sort":
      return {
        ...state,
        sortedTodos: state.sortBy === 'num'
          ? state.todos.slice().
            sort((a, b) => a.num - b.num)
          : state.sortBy === 'item'
              ? state.todos.slice().sort((a, b) => a.item.localeCompare(b.item))
              : state.todos
      }
    case "setSortBy":
      return {
        ...state,
        sortBy: action.payload,
      }
    case 'resetTodos':
      localStorage.setItem('travel', '')
      return {
        ...state,
        todos: [],
      }
    default:
      throw new Error("이상해요 ...");
  }
}

function FarawayProvider({children}) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, sortedTodos } = state;

  return (
       <FarawayContext.Provider value={{
         todos, dispatch, sortedTodos
       }}>
         {children}
       </FarawayContext.Provider>
  );
}

function useFaraway() {
  const context = useContext(FarawayContext);
  if(context === undefined) throw new Error("Context was used outside of Provider")
  return context;
}

export {FarawayProvider, useFaraway};