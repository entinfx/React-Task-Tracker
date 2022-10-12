import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            text: 'Touch grass',
            day: 'Jan 1, 2023 at 13:00',
            reminder: true
        },

        {
            id: 1,
            text: 'Feed cat',
            day: 'Jan 2, 2023 at 13:00',
            reminder: true
        },

        {
            id: 2,
            text: 'Wash socks',
            day: 'Jan 3, 2023 at 13:00',
            reminder: true
        }
    ])

    // Do not directly push to the array to change state. Use setTasks()
    // instead to recreate the state from scratch:
    //
    // setTasks([...])

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} />
        </div>
    )
}

export default App
