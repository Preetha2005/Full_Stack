import React from 'react'
import Welcome from '../welcome'
import Skills from '../skills'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Welcome name='Preetha' Country='India' />
      <Skills skill={['JavaScript', 'React', 'Node.js']} />
      <h1>Hello World</h1>
    </div>
  )
}

export default Home
