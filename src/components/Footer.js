import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Simple checklist, doubleclick the task to toggle reminder</p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer