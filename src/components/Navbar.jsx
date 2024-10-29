import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link> */}
        <NavLink to='/'>Home</NavLink>
        {/*className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}*/}
        <NavLink to='/about'>Sobre</NavLink>
    </nav>
  )
}

export default Navbar