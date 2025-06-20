import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
            <li>
                <link to='/'>Home</link>
            </li>
            <li>
                <link to='/about'>About</link>
            </li>
            <li>
                <link to='/services'>Services</link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
