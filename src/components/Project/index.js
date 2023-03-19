import React from 'react'
import Loader from 'react-loaders'
import './index.scss'
const Project = () => {
    return (
        <>
            <div className="container project-page">
                <div className="text-zone">
                    <h1>Projects</h1>
                    <div id='project-list'>
                        <div className='project'>
                            <h2>Zoo</h2>
                            <p>Zoo is a simple application that allows users to view a list of animals and their information. Users can also add new animals to the list.<br /> This project was made with pure javascript, HTML, and CSS</p>
                            <a href='https://kevinhui98.github.io/zoo/' target='_blank' rel='noopener noreferrer'>View Project</a>
                        </div>
                        <div className='project'>
                            <h2>JavaScript Methods</h2>
                            <p>JavaScript Methods is a simple application that allows users to practice using JavaScript methods. Users can also view the code for each method.</p>
                            <a href='https://kevinhui98.github.io/javascript-methods-starter-code/' target='_blank' rel='noopener noreferrer'>View Project</a>
                        </div>
                        <div className='project'>
                            <h2>Grid Maker</h2>
                            <p>Grid Maker is a simple application that allows users to create a grid of any size. Users can also change the color of each cell.<br /> This application works with a default value of 0 rows and columns so inorder to create a row you will have to create the row then create the column</p>
                            <a href='https://kevinhui98.github.io/grid-maker-starter-code/' target='_blank' rel='noopener noreferrer'>View Project</a>
                        </div>
                        <div className='project'>
                            <h2>Bank of React</h2>
                            <p>Bank of React is a simple banking application that allows users to create a profile, log in, and view their balance and transaction history. Users can also make deposits and withdrawals. This application was built using React, React Router, and Axios.</p>
                            <a href='https://kevinhui98.github.io/bank-of-react/' target='_blank' rel='noopener noreferrer'>View Project</a>
                        </div>
                        <div className='project'>
                            <h2>Flixster</h2>
                            <p>Flixster is an android app created to retrieve the top 20 most popular movies in IMDB. <br />Flixster was implemented in Kotlin using Android studio and Restful API</p>
                            <a href='https://github.com/kevinhui98/flixster_k' target='_blank' rel='noopener noreferrer'>View on github</a>
                        </div>
                        <div className='project'>
                            <h2>parstagram</h2>
                            <p>parstagram is an android application and its functionality is like a barebone instagram, where the user can like, comment, post, and view posts of your own as well as others.<br /> Parstagram was implemented in java using Android studio, back4app(database), and Restful HTTP API</p>
                            <a href='https://github.com/kevinhui98/parstagram' target='_blank' rel='noopener noreferrer'>View on github</a>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Project
