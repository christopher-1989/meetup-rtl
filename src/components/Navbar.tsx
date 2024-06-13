import { routes } from '../routes/router'

function Navbar() {
  return (
    <nav>
      {routes.map((route, index) => (
        <a
          key={index}
          href={route.path}
        >
          {route.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
