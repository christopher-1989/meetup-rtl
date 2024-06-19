import React from 'react'
import qrcode from '../../assets/meetup-rtl-github.svg'

function About() {
  return (
    <>
      <h1>About Page</h1>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', textWrap: 'pretty'}}>
      <img
        src={qrcode}
        alt='github-code'
        width={350}
        height={350}
      />
      <a href='https://github.com/christopher-1989/meetup-rtl' style={{color: 'black'}}>
        https://github.com/christopher-1989/meetup-rtl
      </a>
      </div>
    </>
  )
}

export default About
