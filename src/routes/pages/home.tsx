import React from 'react'
import { useUser } from '../../hooks/useUser'
import { User } from '../../context/UserContext'

type PersonalisedHomeProps = {
  user: User
}

function PersonalisedHome({ user }: PersonalisedHomeProps) {
  if (user) {
    const { firstName, lastName, email } = user

    return (
      <React.Fragment>
        <h2>
          Hey {firstName} {lastName}
        </h2>
        <p>You have signed in as {email}</p>
      </React.Fragment>
    )
  }
}

const GenericMessage = () => <h2>Hello stranger</h2>

function Home() {
  const { user } = useUser()

  return (
    <>
      <h1>Home Page</h1>
      {user ? <PersonalisedHome user={user} /> : <GenericMessage />}
    </>
  )
}

export default Home
