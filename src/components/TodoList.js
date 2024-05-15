import { useState } from "react";

const TodoList = ({tasks, setTasks, setTasksFinished, tasksFinished}) => {
    const [tempCompArr, setTempCompArr] = useState([])

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
                        <div>{eachTodo.label}</div>
                        <input type="checkbox" onChange={() => handleCheckTask(index)} checked={eachTodo.checked}></input>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default TodoList;