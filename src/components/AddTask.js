import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (t) => {
        // Prevent the form from actually submitting
        t.preventDefault()

        // If user hasn't entered a task - alert and return
        if (!text) {
            alert('Please add a task!')
            return
        }

        // Pass task data up to App.js, where the tasks state is managed
        onAdd({ text, date, reminder })

        // Reset the form fields to defaut values
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={text}
                       onChange={(t) => setText(t.target.value)} />
            </div>

            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add date and time' value={date}
                       onChange={(t) => setDate(t.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder}
                       onChange={(t) => setReminder(t.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
