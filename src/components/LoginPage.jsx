import React from 'react'
import { useContext, useState } from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [name,setName]=useState("");    
  return (
    <div className='bg-blue-400 h-screen fixed top-0 w-screen'>
        <div className='w-96 bg-white h-72 text-center flex flex-col mt-36 mx-auto p-4'>
            <label htmlFor="fullName">FullName</label>
            <input type="text" placeholder='write your firstname' value={name}
            onChange={(e)=>setName(e.target.value)}
             className='border-2 mb-6 rounded-lg'/>
            
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder='create your password' className='border-2 mb-6 rounded-lg'/>
            <label htmlFor="Password">Re-enter Password</label>
            <input type="password" placeholder='re-enter your password' className='border-2 mb-6 rounded-lg'/>
            <Link to="/"><li className='list-none bg-red-500  p-2 rounded-lg text-xl' >Login</li></Link>
        </div>
    </div>
  )
}

export default LoginPage;