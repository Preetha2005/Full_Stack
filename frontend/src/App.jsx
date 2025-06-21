import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Infotext from './hooks/Infotext'
import Welcome from './Components/Welcome'; 


// Define Greeting component
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Welcome/> 
      <Infotext />
      <div>
        <Greeting name="Preetha" age={25} />
        <Greeting name="John" age={30} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Reducer" element={<div>Reducer Page</div>} />
      </Routes>
    </>
  )
}

export default App