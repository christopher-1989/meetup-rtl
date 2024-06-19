import { describe, test, expect, vi } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { User, UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { UserProvider } from '../providers/UserProvider'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import { selectInput } from './2-SignupForm.test'
import userEvent from '@testing-library/user-event'

const DEFAULT_USER: User = {
  firstName: 'Jenny',
  lastName: 'Clay',
  email: 'jenny@clay.com',
  dob: '2000-12-12', // Dates need to be in this format
}

vi.spyOn(window, 'alert').mockImplementation(() => {})

vi.mock('src/server/service.ts', () => ({
  postUserData: Promise.resolve({
    data: { firstName: 'Jenny', lastName: 'Clay' },
  }),
}))

const TestingComponent = () => {
  const context = useContext(UserContext)
  return (
    <>
      <p>{context?.user?.firstName}</p>
    </>
  )
}

describe('User Provider', () => {
  test('No user has no value in the Provider context', () => {
    const { getByRole } = render(
      <UserProvider>
        <TestingComponent />
      </UserProvider>
    )

    const paragraph = getByRole('paragraph')
    expect(paragraph).toBeEmptyDOMElement()
    // screen.debug()
  })

  test('Successfully submitting Updates the Provider context', async () => {
    const { getByLabelText, getByRole } = render(
      <UserProvider>
        <TestingComponent />
        <SignUpForm />
      </UserProvider>
    )
    const firstNameInput = selectInput(0)
    await userEvent.click(firstNameInput)
    await userEvent.keyboard(DEFAULT_USER.firstName)

    expect(firstNameInput).toHaveValue(DEFAULT_USER.firstName)

    const lastNameInput = selectInput(1)
    await userEvent.click(lastNameInput)
    await userEvent.keyboard(DEFAULT_USER.lastName)

    expect(lastNameInput).toHaveValue(DEFAULT_USER.lastName)

    const dateInput = getByLabelText('Date of Birth')
    await userEvent.click(dateInput)
    await userEvent.keyboard(DEFAULT_USER.dob)

    const emailInput = selectInput(2)
    await userEvent.click(emailInput)
    await userEvent.keyboard(DEFAULT_USER.email)

    const signUpForm = getByRole('form')
    expect(signUpForm).toBeValid()

    const submitButton = getByRole('button')
    expect(submitButton).toHaveTextContent('Submit')
    expect(submitButton).toBeEnabled()

    await userEvent.click(submitButton)

    const paragraph = getByRole('paragraph')
    await waitFor(() =>
      expect(paragraph).toHaveTextContent(DEFAULT_USER.firstName)
    )
    // screen.debug()
  })
})
