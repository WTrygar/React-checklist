import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
  <button
  onClick={onClick}
    style={{ backgroundColor : color}} 
    className='btn'
  >
      {text}
  </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = { //first letter --> lowercase
    text: PropTypes.string, //first letter --> UPPERCASE
    color: PropTypes.string,
}

export default Button