import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Cards from '../components/Cards'

const Home = () => {
  return (
  <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Navbar></Navbar>
   <Banner></Banner>
    <Freebook></Freebook>
   <Footer></Footer>
</div>
 
  </>
  )
}

export default Home
