import './App.css'
import { Route,Routes } from 'react-router-dom'
import Register from './rout/registration'
import Login from './rout/login'
import Home from './rout/home'




function App() {
  return (
      <div className='main'>
        
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App

