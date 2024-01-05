import './App.css'
import Alldetails from './components/Alldetails'
import Create from './components/Create'
import Edit from './components/Edit'
import Navbar from './components/Navbar'
import {Routes,Route}from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/'element={<Alldetails/>}/>
      <Route path='/create'element={<Create/>}/>
      <Route path='/edit/:id'element={<Edit/>}/>
    </Routes>
    </>
  )
}

export default App
