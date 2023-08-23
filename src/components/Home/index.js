import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import about from '../About/about.json'
import project from '../Project/project.json'
const Home = () => {
    const [letterClass, setLetterClass] = useState('letter-animate')
    // const [textClass, setTextClass] = useState('text-animate')
    const [transitionClass, setTransitionClass] = useState({ transform: 'translateY(0)' })
    const [opacity, setOpacity] = useState({
        opacity: 0,
        transition: "opacity .25s ease-in-out"
    })
    const nameArray = ['K', 'e', 'v', 'i', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    // const infoArray = ['C', 'h', 'e', 'c', 'k', 'o', 'u', 't', ' ', 't', 'h', 'e', ' ', 'o', 't', 'h', 'e', 'r', ' ', 'p', 'a', 'g', 'e', 's']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('letter-animate-hover')
        }, 1000)
        setTimeout(() => {
            // setTextClass('text-animate-hover')
            setTransitionClass({
                transform: 'translateY(-30%)',
                transition: 'transform 2s ease-in-out'
            })

        }, 3000)
        setTimeout(() => {
            setOpacity({
                opacity: 1,
                transition: "opacity .75s ease-in-out"
            })
        }, 4000)
    }, [])
    let skillList = []
    Object.keys(about).forEach((element) => {
        for (let name in about[element]) {
            skillList.push([name, about[element][name]])
        }
    })
    skillList = skillList.sort((a, b) => b[1] - a[1]).slice(0, 8)
    let projectList = Object.values(project)
    projectList = projectList.slice((projectList.length - 2), projectList.length)
    console.log(projectList)
    return (
        <div className='container-fluid home-page'>
            <div className="left-zone" style={transitionClass}>
                <h1 className="display-1">
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _11`}>i</span>
                    <br />
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _13`}>'m</span>
                    <span className={`${letterClass} _14`}> </span>

                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>
                <h2>Front-end developer</h2>
                <Link to='/contact' className='flat-button'>Contact me</Link>
            </div>
            <div className="right-zone" style={transitionClass}>
                <h1>
                    {/* <AnimatedLetters letterClass={textClass} strArray={infoArray} idx={31} name={"display-1"} /> */}
                    checkout the other pages for more info
                </h1>
            </div>
            <div className='topSkills' style={opacity}>
                <h1>
                    Top Skills
                </h1>
                <ul className='skill'>
                    {skillList.map((skill, idx) => (
                        <div key={idx} >
                            <li className='skill-name'><h3>{skill[0]}</h3></li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='recentProjects' style={opacity}>
                <h1>Recent Projects</h1>
                <ul>
                    {projectList.map((project, idx) => (
                        <li key={idx} className='project'>
                            <div className='project-img'>
                                <h3>{project.title}</h3>
                                <img src={project.img} alt={project.name} />
                                <h4>{project.description}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home
