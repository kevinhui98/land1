import { React, useState, useEffect } from 'react'
// import profilePic from '../../assets/images/profile.jpeg'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
const Home = () => {
    const [letterClass, setLetterClass] = useState('letter-animate')
    const [textClass, setTextClass] = useState('text-animate')

    const nameArray = ['K', 'e', 'v', 'i', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    const infoArray = ['C', 'h', 'e', 'c', 'k', 'o', 'u', 't', ' ', 'o', 'u', 't', ' ', 't', 'h', 'e', ' ', 'o', 't', 'h', 'e', 'r', ' ', 'p', 'a', 'g', 'e', ' ', 'f', 'o', 'r', ' ', 'm', 'o', 'r', 'e', ' ', 'i', 'n', 'f', 'o']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('letter-animate-hover')
        }, 5000)
        setTimeout(() => {
            setTextClass('text-animate-hover')
        }, 6100)
    }, [])
    return (
        <div className='container home-page'>
            {/* <img src={profilePic} alt='developer' id='pic' /> */}
            <div className="left-zone">
                <h1>
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
            <div className="right-zone">
                <h1>
                    <AnimatedLetters letterClass={textClass} strArray={infoArray} idx={19} />
                </h1>
            </div>
        </div>
    )
}

export default Home
