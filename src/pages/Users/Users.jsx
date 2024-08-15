import React, { useState } from 'react'
import { useFetch } from '../../Hook/useFetch'

function Users() {
  const postList = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div className='h-screen overflow-y-auto'>
      <div className="flex justify-center  p-[20px] ">
        <h2 className="font-bold text-[26px]">Users</h2>
      </div>
      <table className='h-screen overflow-y-auto' border="1" cellPadding="10">
        <thead className='font-bold text-[24px] border-[2px] border-slate-500'>
          <tr className='border-[1px] border-slate-500'>
            <th className='border-[1px] border-slate-500'>ID</th>
            <th className='border-[1px] border-slate-500'>Username</th>
            <th className='border-[1px] border-slate-500'>Email</th>
            <th className='border-[1px] border-slate-500'>Phone</th>
            <th className='border-[1px] border-slate-500'>City</th>
            <th className='border-[1px] border-slate-500'>Street</th>
            <th className='border-[1px] border-slate-500'>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((user) => (
            <tr className='border-[1px] border-slate-500' key={user.id}>
              <td className='border-[1px] border-slate-500 p-[10px]'>{user.id}</td>
              <td className='border-[1px] border-slate-500 p-[10px]'>{user.username}</td>
              <td className='border-[1px] border-slate-500 p-[10px]'>{user.email}</td>
              <td className='border-[1px] border-slate-500 p-[10px]'>{user.phone}</td>
              <td className='border-[1px] border-slate-500 p-[10px]'>{user.address.city}</td>
              <td className='border-[1px] border-slate-500 p-[10px]'>{`${user.address.street} ${user.address.number}`}</td>
              <td className='border-[1px] border-slate-500 p-[10px]'>{user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
