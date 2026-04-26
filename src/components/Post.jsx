
import React from 'react'

const Post = ({userId,title,body}) => {
  return (
    <div className='p-10 rounded-3xl border-blue-700 bg-blue-300 0 my-10 mx-5'>
        <p className='text-blue-950 underline text-5xl mb-5'>{userId}</p>
      <h3 className='opacity-80 text-black '>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Post
