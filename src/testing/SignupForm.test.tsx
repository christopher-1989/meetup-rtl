import { describe, test, expect, assert } from 'vitest'
import { screen } from '@testing-library/react'
import { type User } from '../context/UserContext'
import '@testing-library/jest-dom/vitest'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import { render } from './test-utils'
import userEvent from '@testing-library/user-event'

const DEFAULT_USER: User = {
  firstName: 'Jenny',
  lastName: 'Clay',
  email: 'jenny@clay.com',
  dob: '2000-12-12', // Dates need to be in this format
}

describe('Sign Up Form', () => {
  test('is invalid and cannot be submitted without required fields', () => {
    const { getByRole } = render(<SignUpForm />)
    const submitButton = getByRole('button')
    expect(submitButton).toHaveTextContent('Submit')
    expect(submitButton).toBeDisabled()

    const signUpForm = getByRole('form')
    expect(signUpForm).toBeInvalid()
  })

  test('is invalid with the first name field provided', async () => {
    const { getByRole } = render(<SignUpForm />)
    const firstNameInput = selectInput(0)
    await userEvent.click(firstNameInput)
    await userEvent.keyboard(DEFAULT_USER.firstName)

    expect(firstNameInput).toHaveValue(DEFAULT_USER.firstName)

    const signUpForm = getByRole('form')
    expect(signUpForm).toBeInvalid()
  })

  test('is invalid with the first and last name fields provided', async () => {
    const { getByRole } = render(<SignUpForm />)
    const firstNameInput = selectInput(0)
    await userEvent.click(firstNameInput)
    await userEvent.keyboard(DEFAULT_USER.firstName)

    expect(firstNameInput).toHaveValue(DEFAULT_USER.firstName)

    const lastNameInput = selectInput(1)
    await userEvent.click(lastNameInput)
    await userEvent.keyboard(DEFAULT_USER.lastName)

    expect(lastNameInput).toHaveValue(DEFAULT_USER.lastName)

    const signUpForm = getByRole('form')
    expect(signUpForm).toBeInvalid()
  })

  test('is invalid with the first, and last name, and date fields provided', async () => {
    const { getByLabelText, getByRole } = render(<SignUpForm />)
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

    const signUpForm = getByRole('form')
    expect(signUpForm).toBeInvalid()
  })

  test('is valid with all fields provided', async () => {
    const { getByLabelText, getByRole } = render(<SignUpForm />)
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
  })

  test('is invalid with an invalid email', async () => {
    const { getByLabelText, getByRole } = render(<SignUpForm />)
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

    await userEvent.keyboard('INVALIDEMAIL')

    const signUpForm = getByRole('form')
    expect(signUpForm).toBeInvalid()
  })
})

function selectInput(number: number) {
  const input = screen.getAllByRole('textbox')[number]
  assert(input instanceof HTMLInputElement)
  return input
}
