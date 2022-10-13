import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddTask, onButtonClick}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAddTask ? 'Hide form' : 'Add task'} onClick={onButtonClick} color='midnightBlue' />
        </header>
    )
}

// Props
Header.defaultProps = {
    title: 'React Task Tracker'
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }

// CSS
// const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
