const Input = ({setTasks, tasks, setTodoItem, todoItem}) => {

    return (
        <div>
            <input placeholder="Add task" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}></input>
        </div>
    )
}

export default Input;
