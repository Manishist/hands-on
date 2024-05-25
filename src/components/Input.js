import { useContext } from "react"
import { TodoContext } from "../App";

const Input = () => {

    const context = useContext(TodoContext)

    const {tasks, setTasks, setTodoItem, todoItem} = context

    const AddTodo = () => {
        setTasks([...tasks, {label: todoItem, checked: false, edit: false}]);
        setTodoItem("");
    }

    return (
        <div>
            <input placeholder="Add task" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}></input>
            <button onClick={AddTodo}>Add</button>
        </div>
    )
}

export default Input;
