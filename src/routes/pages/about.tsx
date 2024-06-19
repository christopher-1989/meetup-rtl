import github from '../../assets/meetup-rtl-github.svg'
import porfolio from '../../assets/meetup-rtl-github.svg'

function About() {
  return (
    <>
      <div className='about-wrapper'>
        <h1>Unit Testing with RTL</h1>
        <p>Chris McDonald</p>
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
        <h2>Introduction</h2>
        <ul>
          <li>What are unit tests?</li>
          <li>What is React Testing Library?</li>
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
          src={github}
          alt='Github Repo'
          width={350}
          height={350}
        />
        <a
          className='svg-link'
          href='https://github.com/christopher-1989/meetup-rtl'
        >
          https://github.com/christopher-1989/meetup-rtl
        </a>
      </div>
    </>
  )
}

export default About
