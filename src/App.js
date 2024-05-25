
import './App.css';
import { createContext, useState } from "react"
import Input from './components/Input';
import TodoList from './components/TodoList';
import CompletedTodo from './components/CompletedTodo';

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
  const [tasks, setTasks] = useState([])
  const [tasksFinished, setTasksFinished] = useState([])
  const [todoItem, setTodoItem] = useState("")

  return (
    <TodoContext.Provider value={{tasks, setTasks, tasksFinished, setTasksFinished, todoItem, setTodoItem}}>
      {children}
    </TodoContext.Provider>
  )
}

function App() {
  return (
    <TodoContextProvider>
      <div style={{position: "absolute", right: "50%", marginTop: "30px"}}>
        <div style={{marginTop: "30px"}}>      
          <Input/>
        </div>
        <div style={{marginTop: "30px"}}>      
          <TodoList/>
        </div>
        <div style={{marginTop: "30px"}}>      
          <CompletedTodo/>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App;
