import React from 'react'

const Note = ({title,notes,id,deletefn}) => {
  return (
    <div className='bg-gray-400 shrink-0 text-center w-max rounded-3xl p-4 m-5  '>
      <h1 className=' text-3xl text-blue-950 '>{title}</h1>
      <p className='p-5 rounded-r-2xl  text-black'>
        {notes}
      </p>
      <button onClick={()=>{deletefn(id)}} className='bg-gray-600 text-amber-50 rounded-2xl py-2 px-4 m-2.5' >Delete</button>
    </div>
  )
}

export default Note
