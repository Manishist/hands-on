import { useState } from "react"

const Input = ({tasks, setTasks}) => {

    const [todoItem, setTodoItem] = useState("")
    const AddTodo = () => {
        setTasks([...tasks, {label: todoItem, checked: false}]);
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
