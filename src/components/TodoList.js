import { useState } from "react";

const TodoList = ({tasks, setTasks, setTasksFinished, tasksFinished}) => {
    const [tempCompArr, setTempCompArr] = useState([])
    const [todoItemNew, setTodoItemNew] = useState("")

    const handleCheckTask = (index) => {
        // this was showing error - direct change in array
        // setTasks(tasks[index].checked = true)
        const updatedTasks = [...tasks];
        updatedTasks[index].checked = !updatedTasks[index].checked;
        tasks = updatedTasks
        if(updatedTasks[index].checked === true){
            setTempCompArr([...tempCompArr, tasks[index].label])
        }else{
            tempCompArr.splice(index,1)
        }
        setTasks(updatedTasks);
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter(item => item.label !== tasks[index].label))
    }
    const editTask = (index) => {
        const editedTasks = [...tasks];
        editedTasks[index].edit = true;
        tasks = editedTasks
        setTasks(editedTasks);
    }
    const editTaskClick = (index) => {
        const editedTasks = [...tasks];
        editedTasks[index].label = todoItemNew;
        editedTasks[index].edit = false;
        tasks = editedTasks
        setTasks(editedTasks);
        setTodoItemNew("")
    }
    const moveTasksToDone = () => {
        setTasksFinished([...tasksFinished, ...tempCompArr])
        setTasks(tasks.filter(item => !tempCompArr.includes(item.label)));
        setTempCompArr([]);
    }

    return (
        <div>
            <div style={{fontSize: "24px", fontWeight: "600"}}>Todo Tasks</div>
            <button style={{position: "absolute", top: "85px", left: "110%"}} onClick={moveTasksToDone}>Finished!</button>
            <div>{tasks.map((eachTodo, index) => {
                return (
                    <div style={{display: "flex"}} index={index}>
                        {eachTodo.edit ? (<>
                        <input type="text" value={todoItemNew} onChange={(e) => setTodoItemNew(e.target.value)}></input> 
                        <button onClick={() => editTaskClick(index)}>Final</button></>)
                        : (<>
                        <div>{eachTodo.label}</div>
                        <input type="checkbox" onChange={() => handleCheckTask(index)} checked={eachTodo.checked}></input>
                        <button onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button></>)}
                    </div>
                )
            })}</div>
        </div>
    )
}

export default TodoList;