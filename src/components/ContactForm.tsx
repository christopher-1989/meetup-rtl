import { ChangeEvent, FormEvent, useState } from 'react'
import './ContactUsForm.css'

type FormData = {
  firstName: string
  lastName: string
  dob: string
  email: string
}

const ContactUsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you can handle form submission, e.g., send the data to a server
    console.log('Form data submitted:', formData)
  }

  console.log({formData})

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
          autoComplete='email'
          required
        />
        <label
          htmlFor='email'
          className={formData.email ? 'filled' : ''}
        >
          Email
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ContactUsForm
