import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../hooks/UserContext' // if you need your context


const About = () => {
  const name = useContext(UserContext)
  return (
    <div>
      <h1>Hi! {name}</h1>
         
      <state/>
    </div>
  )
}

export default About
