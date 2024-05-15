const CompletedTodo = ({tasksFinished, setTasks, tasks}) => {

    const undoTask = (index) => {
        setTasks([...tasks, {label: tasksFinished[index], checked: false}])
        tasksFinished.splice(index, 1)
    }
    // component is rendering on each CTA

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