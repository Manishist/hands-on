import { useContext } from "react"
import { TodoContext } from "../App"

const CompletedTodo = () => {

    const {tasksFinished, setTasks, tasks} = useContext(TodoContext)

    const undoTask = (index) => {
        setTasks([...tasks, {label: tasksFinished[index], checked: false, edit: false}])
        tasksFinished.splice(index, 1)
    }

    return (
        <div>
            <div style={{fontSize: "24px", fontWeight: "600"}}>Completed Tasks</div>
            <div>{tasksFinished?.map((eachTodo, index) => {
                return (
                    <div style={{display: "flex"}} index={index}>
                        <div>{eachTodo}</div>
                        <button onClick={() => undoTask(index)}>Undo</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default CompletedTodo;