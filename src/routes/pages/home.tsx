import { useUser } from '../../hooks/useUser'
import PersonalisedHome from '../../components/PersonalisedHome'

function Home() {
  const { user } = useUser()

  return (
    <>
      <h1>Home Page</h1>
      {user ? <PersonalisedHome user={user} /> : <h2>Hello stranger</h2>}
    </>
  )
}

export default Home
