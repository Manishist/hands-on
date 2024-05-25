import { useContext, useState } from "react";
import { TodoContext } from "../App";

const TodoList = () => {

    var {tasks, setTasks, setTasksFinished, tasksFinished} = useContext(TodoContext)
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
    const upTask = (index) => {
        if(index > 0){
            const upPriority = [...tasks]
            const tempEle = upPriority[index]
            upPriority[index] = upPriority[index - 1]
            upPriority[index - 1] = tempEle;
            setTasks(upPriority)
        }
        console.log("up")
    }
    const downTask = (index) => {
        if(index < tasks.length-1){
            const downPriority = [...tasks]
            const tempEle = downPriority[index]
            downPriority[index] = downPriority[index + 1]
            downPriority[index + 1] = tempEle;
            setTasks(downPriority)
        }
        console.log("Down", tasks.length)
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
                        <input type="text" value={todoItemNew} placeholder={eachTodo.label} onChange={(e) => setTodoItemNew(e.target.value)}></input> 
                        <button onClick={() => editTaskClick(index)}>Final</button></>)
                        : (<>
                        <div>{eachTodo.label}</div>
                        <input type="checkbox" onChange={() => handleCheckTask(index)} checked={eachTodo.checked}></input>
                        <button onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => upTask(index)}>Up</button>
                        <button onClick={() => downTask(index)}>Down</button></>)}
                    </div>
                )
            })}</div>
        </div>
    )
}

export default TodoList;