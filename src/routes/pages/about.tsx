import github from '../../assets/meetup-rtl-github.svg'
import porfolio from '../../assets/meetup-rtl-github.svg'

function About() {
  return (
    <>
      <div className='about-wrapper-top'>
        <h1>
          Unit Testing with RTL
          <br/>
          Chris McDonald  
        </h1>
        <img
          src={github}
          alt='Github Repo'
          width={250}
          height={250}
        />
        <a
          className='svg-link'
          href='https://github.com/christopher-1989/meetup-rtl'
        >
          https://github.com/christopher-1989/meetup-rtl
        </a>
        <div className='divider' />
        <h2 className='intro-heading'>Introduction</h2>
        <ul>
          <li>What are unit tests?</li>
          <li>
            What is React Testing Library?
            <br />
            <span>
              The more your tests resemble the way your software is used, the
              more confidence they can give you."
            </span>
          </li>
          <li>
            <a
              href='https://dev.to/marktnoonan/why-i-rarely-use-getbyrole-testing-library-and-the-first-rule-of-aria-4581'
              style={{
                color: 'black',
                textDecoration: 'underline',
                padding: 0,
                margin: 0,
              }}
            >
              Inspiration
            </a>
          </li>
          <li>Examples</li>
        </ul>
      </div>

      <div className='about-wrapper'>
        <img
          src={porfolio}
          alt='My 3D Portfolio'
          width={350}
          height={350}
        />
        <a
          className='svg-link'
          href='https://christopher-1989.github.io/webgl-3d-portfolio/'
        >
          https://christopher-1989.github.io/webgl-3d-portfolio/
        </a>
      </div>
    </>
  )
}

export default About
