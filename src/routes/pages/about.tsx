import React from 'react'
import  qrcode from '../../assets/meetup-rtl-github.svg' 

function About() {
  return (
    <>
      <h1>About Page</h1>
      <img src={qrcode} alt="github-code" width={400} height={400} />
      <p>https://github.com/christopher-1989/meetup-rtl</p>
    </>
  )
}

export default About
