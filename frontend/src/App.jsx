import React from 'react'
import Home from './home/Home'
import Cards from './components/Cards'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'


const App = () => {
  return (
<>
{/* <Home></Home>
<Course></Course> */}
<div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/course' element={<Courses></Courses>}></Route>
      <Route path='/login' element={<Login/>}></Route>

    <Route path='/signup' element={<Signup></Signup>}></Route>

</Routes>
</div>
  </>
  )
}

export default App
