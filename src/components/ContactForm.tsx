import { ChangeEvent, FormEvent, useState } from 'react'
import './ContactUsForm.css'
import { useUser } from '../hooks/useUser'
import postUserData from '../server/service.ts'

export type UserData = {
  firstName: string
  lastName: string
  dob: string
  email: string
}

const ContactUsForm = () => {
  
  const [formData, setFormData] = useState<UserData>({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
  })
  const { user, setUser } = useUser()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  console.log({user})

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const succeed = (Math.floor(Math.random() * 2) + 1) % 2 === 0
    try {
      const result = await postUserData(formData, succeed)
      setUser(result.data)
      console.log("result", result.data)
    } catch {
      console.error("Failed to submit form")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='contact-form'
    >
      <div className='form-group'>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label
          htmlFor='firstName'
          className={formData.firstName ? 'filled' : ''}
        >
          First Name
        </label>
      </div>
      <div className='form-group'>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label
          htmlFor='lastName'
          className={formData.lastName ? 'filled' : ''}
        >
          Last Name
        </label>
      </div>
      <div className='form-group'>
        <input
          type='date'
          id='dob'
          name='dob'
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <label
          htmlFor='dob'
          className={formData.dob ? 'filled' : ''}
        >
          Date of Birth
        </label>
      </div>
      <div className='form-group'>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          autoComplete='e'
          required
        />
        <label
          htmlFor='email'
          className={formData.email ? 'filled' : ''}
        >
          Email
        </label>
      </div>
      {user && <p>{user.firstName}</p>}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ContactUsForm
