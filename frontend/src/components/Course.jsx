import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Course = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res=await axios.get("http://localhost:5000/book")
               console.log(res.data)
               setBook(res.data)

            } catch (error) {
                console.log("error",error)
            }
        }
        getBook()

    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1  className='text-2xl font-semibold'>We're delighted to have you 
                 <span className='text-pink-500'> here!:)</span></h1>
                 <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut ratione voluptatibus tempora velit obcaecati, impedit optio repudiandae vero, 
                    nemo recusandae deserunt sapiente et totam corporis itaque quisquam perferendis laborum.</p>

                    <Link to='/'><button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back

                    </button>
</Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}></Cards>
                ))
            }
        </div>
        </div></>
  )
}

export default Course
