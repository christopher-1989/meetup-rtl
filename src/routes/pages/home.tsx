import { useUser } from '../../hooks/useUser'
import PersonalisedHome from '../../components/PersonalisedHome'

export const DEFAULT_GREETING = 'Hello stranger'

function Home() {
  const { user } = useUser()

  return (
    <>
      <h1>Home Page</h1>
      {user ? <PersonalisedHome user={user} /> : <h2>{DEFAULT_GREETING}</h2>}
    </>
  )
}

export default Home
