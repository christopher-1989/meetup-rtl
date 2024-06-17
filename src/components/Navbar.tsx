import { Link } from 'react-router-dom'
import { routes } from '../routes/router'

function Navbar() {
  return (
    <nav>
      {routes.map((route, index) => (
        <Link
          key={index}
          to={route.path}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
