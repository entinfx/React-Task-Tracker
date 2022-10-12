import PropTypes from 'prop-types'
import colors from '../colors.js'

const Button = ({ text, color, onClick }) => {
    const backgroundColor = colors[color]

    return (
        <button className='btn' onClick={ onClick } style={{ backgroundColor }}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'default'
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string
}

export default Button
