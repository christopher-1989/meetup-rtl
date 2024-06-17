import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import { routes } from './routes/router'
import { UserProvider } from './providers/UserProvider'

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
        <Route
          path='*'
          element={<h3>Page not found</h3>}
        />
      </Routes>
    </UserProvider>
  )
}

export default App
