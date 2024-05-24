
import './App.css';
import { useState } from "react"
import Input from './components/Input';
import TodoList from './components/TodoList';
import CompletedTodo from './components/CompletedTodo';

function App() {

  const [tasks, setTasks] = useState([])
  const [tasksFinished, setTasksFinished] = useState([])
  const [todoItem, setTodoItem] = useState("")

  return (
    <div style={{position: "absolute", right: "50%", marginTop: "30px"}}>
      <div style={{marginTop: "30px"}}>      
        <Input tasks={tasks} setTasks={setTasks} todoItem={todoItem} setTodoItem={setTodoItem}/>
      </div>
      <div style={{marginTop: "30px"}}>      
        <TodoList tasks={tasks} setTasks={setTasks} setTasksFinished={setTasksFinished} tasksFinished={tasksFinished}/>
      </div>
      <div style={{marginTop: "30px"}}>      
        <CompletedTodo tasks={tasks} setTasks={setTasks} tasksFinished={tasksFinished} setTasksFinished={setTasksFinished}/>
      </div>
    </div>
  )
}

export default App;
