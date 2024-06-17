import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import { routes } from './routes/router'
import { UserProvider } from './providers/UserProvider'
import Home from './routes/pages/home'

function App() {
  return (
    <UserProvider>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
    </UserProvider>
  )
}

export default App
