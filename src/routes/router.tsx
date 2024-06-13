import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

export const routes = [
  {
    path: '/',
    element: <Home />,
    label: 'Home',
  },
  {
    path: '/about',
    element: <About />,
    label: 'About',
  },
  {
    path: '/contact',
    element: <Contact />,
    label: 'Contact',
  },
]

const options = {
  basename: '/',
}

export const router = createBrowserRouter(routes, options)
