import React from 'react'
import './index.scss'
const AnimatedLetters = ({ letterClass, strArray, idx, name }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx} ${name}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default AnimatedLetters
