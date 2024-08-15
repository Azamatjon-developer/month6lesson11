import React from 'react'
import { useFetch } from '../../Hook/useFetch'
import { useParams } from 'react-router-dom'
function About() {
  const { id } = useParams()
  const postList = useFetch(`https://fakestoreapi.com/products/${id}`)

  return (
    <div>
      <div className="h-screen overflow-y-auto">
        <div className="flex gap-5  justify-center items-center mt-[30px]">
          <img src={postList.image} alt="image" width={250} height={200} />
          <div className = "flex flex-col space-y-5 items-start mt-[20px]">
           <p className = {"font-bold text-[24px]"}>
            {postList.title}
           </p>
           <p className ={"w-[500px] "}>
           {postList.description}
           </p>
           <p>
            Category : 
            {postList.category}
           </p>
           <p>
           rating : 
            {postList.rating?.rate}
            <br />
            count :
            {postList.rating?.count}
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
