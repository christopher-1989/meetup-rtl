import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PersonalisedHome from '../components/PersonalisedHome'
import { User } from '../context/UserContext'
import '@testing-library/jest-dom/vitest'


let DEFAULT_USER: User = {
  firstName: 'Jenny',
  lastName: 'Clay',
  email: 'jenny@clay.com',
  dob: '12/12/2000',
}

describe('Personalised Home', () => {
  test('displays props directly', () => {
    render(<PersonalisedHome user={DEFAULT_USER} />)
    // const heading = screen.getByRole('heading')
    // expect(heading).toContainValue("test")

    screen.debug()
  })
})
