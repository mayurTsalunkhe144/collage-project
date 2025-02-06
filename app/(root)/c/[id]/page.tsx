import React from 'react'

const page = ({params}:{params:{id:string}}) => {
  return (
    <div className=' text-white'>{params.id}</div>
  )
}

export default page