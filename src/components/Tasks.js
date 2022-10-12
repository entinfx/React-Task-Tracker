import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    if (tasks.length === 0) {
        return <p>There are no tasks. Add some!</p>
    }

    return (<>{
        tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
    }</>)
}

export default Tasks
