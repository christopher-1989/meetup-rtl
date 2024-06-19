import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PersonalisedHome from '../components/PersonalisedHome'
import { User } from '../context/UserContext'
import '@testing-library/jest-dom/vitest'

const DEFAULT_USER: User = {
  firstName: 'Jenny',
  lastName: 'Clay',
  email: 'jenny@clay.com',
  dob: '12/12/2000',
}

describe('Personalised Home', () => {
  test('Example of showing the DOM', () => {
    render(<PersonalisedHome user={DEFAULT_USER} />)
    screen.debug()
  })

  test('Renders greeting in h2', () => {
    const { getByRole } = render(<PersonalisedHome user={DEFAULT_USER} />)
    const result = getByRole('heading', { level: 2 })

    const expected = `Hey ${DEFAULT_USER.firstName} ${DEFAULT_USER.lastName}`
    expect(result).toHaveTextContent(expected)
  })

  test('Renders email status message', () => {
    const { getByRole } = render(<PersonalisedHome user={DEFAULT_USER} />)
    const result = getByRole('paragraph')

    const expected = `You have signed in as ${DEFAULT_USER.email}`
    expect(result).toHaveTextContent(expected)
  })
})
