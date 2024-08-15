import React from 'react'
import { useFetch } from '../../Hook/useFetch'
import { Link, useNavigate } from 'react-router-dom'
function Products() {
const navigate = useNavigate()
const postList = useFetch('https://fakestoreapi.com/products')
console.log(postList)
  return (
    <div className=''>
      <div className='flex justify-center text-[26px] font-bold p-[20px]'>
      <h2 className=''>Products </h2>
      </div>
      <div className='grid items-center gap-[20px] grid-cols-12 h-screen overflow-y-auto'>
      {
        postList.map(item => (
          <div className='col-span-3 overflow-hidden flex flex-col justify-between ] min-w-[300px] max-w-[300px] max-h-[400px] min-h-[500px] border-[2px] border-slate-500' key={item.id}>
            <Link to={`/about/${item.id}`} className='flex flex-wrap items-center text-center pt-[20px]'>
             <img className='m-auto' src={item.image} alt="image" width={170} height={180}/>
            </Link>
            <div className='flex flex-col justify-end items-center'>
              <p className='font-bold p-[12px]'>
                {item.price}$
              </p>
              <p className='text-center'>
              category :   {item.category}
              </p>
              
              <Link to={`/about/${item.id}`} className='pt-[10px] pl-[18px] pb-[10px] pr-[18px] bg-slate-600 mt-[10px] rounded-md text-white font-semibold mb-[20px]'>About products</Link>
            </div>
          </div>

        ))
      }
      </div>
    </div>
  )
}

export default Products
