import Home from './pages/home'
import About from './pages/about'
import SignUp from './pages/signup'

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
    path: '/signup',
    element: <SignUp />,
    label: 'Sign Up',
  },
]
