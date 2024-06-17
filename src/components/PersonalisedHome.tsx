import React from 'react'
import { User } from '../context/UserContext'

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

export default PersonalisedHome
