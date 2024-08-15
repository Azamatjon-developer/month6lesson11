import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-col bg-[#00000098] text-white h-screen overflow-y-auto font-bold p-[20px] text-[26px]'>
      <NavLink to={"/"}>
        <h2>Users</h2> 
      </NavLink>
      <NavLink to={"/products"}>
        <h2 className='mt-[10px]'>Products</h2> 
      </NavLink>
    </nav>
  )
}

export default Navbar
