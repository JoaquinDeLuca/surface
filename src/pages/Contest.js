import React from 'react'
import TopThree from '../components/Concurse/TopThree'
import AllPosts from '../components/Concurse/AllPosts'
import './styles/Contest.css'

const Contest = () => {
    return (
        <div className='contestPage'>
            <TopThree />
            <AllPosts/>
        </div>
    )
}

export default Contest