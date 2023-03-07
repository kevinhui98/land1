import { React, useEffect, useState } from 'react'
import {
  faAndroid,
  faCss3,
  faGitAlt,
  faHtml5,
  faAws,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1><h2>
            Graduate of Hunter College of New York. My current goals on top of writing clean code are to generate solutions for daily users and top companies.
          </h2><p>
            My current skill set includes:
          </p><ul>
            <li>Frontend: Javascript (Proficient), ES6 (Proficient), jQuery (Intermediate), React JS (Proficient)</li>
            <li>Backend: Python (Intermediate), C# (Intermidate), NodeJs (Intermediate), C++ (Intermediate), Java (Intermediate), Kotlin (Intermediate)</li>
            <li>APIs: Restful (Intermediate),</li>
            <li>DB: MySQL (Proficient)</li>
            <li>Cloud: RDS (Intermediate), S3 (Intermediate), EC2 (Intermediate), IAM (Intermediate)</li>
            <li>Source Control: Git</li>
          </ul><p>
            Outside of building and programming, I enjoy going to the gym and volunteering at an Animal shelter.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAndroid} color="#99cc33" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAws} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
