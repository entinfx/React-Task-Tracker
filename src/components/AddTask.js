import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={text}
                       onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add date and time' value={date}
                       onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' value={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
