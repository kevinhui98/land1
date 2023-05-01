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
import about from './about.json'
import SelectSkill from './SelectSkill'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  let skills = Object.keys(about)
  const [skill, setSkill] = useState(skills[0])
  const onChange = (e) => {
    const value = e.target.value;
    setSkill(value);
  }
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
          </h2><h2>
            My current skill set includes:
          </h2>
          <br />
          <SelectSkill
            skill={skills}
            onChange={onChange}
          />
          {Object.keys(about).map((item, index) => {
            let about_index = JSON.parse(JSON.stringify(about[item]))
            if (item !== skill) return null
            else {
              return (
                <ul key={index} className={index}>
                  {/* <h2>{item}</h2> */}
                  {Object.keys(about_index).map((skill_index) => {
                    let skill = JSON.parse(JSON.stringify(about_index[skill_index]))
                    return (
                      <>
                        <li>{skill.name}</li>
                        <li>{skill.level}</li>
                      </>
                    )
                  })
                  }
                </ul>
              )
            }
          })}
          <p>
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
