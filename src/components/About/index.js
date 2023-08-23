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
  let skillList = []
  skills.forEach((element) => {
    for (let name in about[element]) {
      // console.log(i, about[element][i])
      skillList.push([name, about[element][name]])
    }
    // skillList.push(about_index)
  })
  // console.log("skills", skillList)
  // skills.forEach((element) => {
  //   console.log(element[1])
  // })
  return (
    <>
      <div className="container-fluid about-page">
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
          {/* <SelectSkill
            skill={skills}
            onChange={onChange}
          /> */}
          {/* {Object.keys(about).map((item, index) => {
            let about_index = JSON.parse(JSON.stringify(about[skill]))
            console.log(Object.keys(about[skill]))
            console.log("skill", item)
              console.log("about_index", about_index)
            let selectedSkill = Object.keys(about[skill])
            return (
              <ul key={index} className={index}>
                {Object.keys(about_index).map((skill_index) => {
                    console.log("skill_index", skill_index)
                    let selectedSkill = skill_index
                    return (
                      <li>{skill_index} : {about_index[skill_index]}</li>
                    )
                  })
                  }


              </ul>
            )
          }
          )} */}
          <ul>
            {skillList.map(item => {
              console.log("item", item)
              return (
                <li >
                  {item[0]} : {item[1]}
                  {/* <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                          <div className="progress-bar progress-bar-striped" style={{ width: `${item[1]}` }}>{item[1]}</div>
                        </div> */}
                </li>
              )
            }
            )}
          </ul>

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
      </div >
      <Loader type="pacman" />
    </>
  )
}

export default About
