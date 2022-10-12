import { FaTrash } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={ task.reminder ? 'task reminder' : 'task' } style={{ cursor: 'default' }}
             onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTrash style={{ color: 'grey', cursor: 'pointer' }}
                         onClick={() => onDelete(task.id)} />
            </h3>

            <p>{task.date}</p>
        </div>
    )
}

export default Task
