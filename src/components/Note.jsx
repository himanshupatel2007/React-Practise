import React from 'react'

const Note = ({title,notes,id,deletefn}) => {
  return (
    <div className='w-max shrink-0 text-center'>
      <h1 className='mb-10 text-3xl text-blue-950 '>{title}</h1>
      <p className='p-5 rounded-r-2xl bg-amber-100 text-black'>
        {notes}
      </p>
      <button onClick={()=>{deletefn(id)}} className='bg-gray-800 text-amber-50 rounded-2xl py-2 px-4 m-2.5' >Delete</button>
    </div>
  )
}

export default Note
