import React from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
// import parstagram from '../../assets/images/parstagram.gif'
import project from './project.json'
const Project = () => {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            console.log(project)
            setLoading(false)
        }, 1000)
    }, [])
    const [letterClass, setLetterClass] = React.useState('text-animate')

    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
    }, [])

    return (
        <div className="container-fluid project-page">
            {loading ? <Loader type="pacman" /> :
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        /></h1>
                    <div id='project-list'>
                        {
                            Object.keys(project).map((item) => {
                                let project_index = JSON.parse(JSON.stringify(project[item]))
                                return (
                                    <div className='project'>
                                        <h2>{project_index.title}</h2>
                                        <ul>
                                            <li>
                                                <p>{project_index.description}</p>
                                                <a href={project_index.link} target='_blank' rel='noopener noreferrer'>
                                                    view project
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Project
