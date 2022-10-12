import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            text: 'Touch grass',
            date: 'Jan 1, 2023 at 13:00',
            reminder: true
        },

        {
            id: 1,
            text: 'Feed cat',
            date: 'Jan 2, 2023 at 13:00',
            reminder: true
        },

        {
            id: 2,
            text: 'Wash socks',
            date: 'Jan 3, 2023 at 13:00',
            reminder: true
        }
    ])

    // Do not directly push to the array to change state. Use setTasks()
    // instead to recreate the state from scratch:
    //
    // setTasks([...])

    // Delete task function
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => {
            return task.id === id ? { ...task, reminder: !task.reminder } : task
        }))
    }

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        </div>
    )
}

export default App
