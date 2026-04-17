import React from 'react'

const Blocks = ({number,imageUrl,text,name}) => {
  return (
    <div style={{backgroundImage : `url(${imageUrl})`}} >
      <div className="circle">{number}</div>
      <div className="bottom">
        <p>{text}</p>
      <div className="navigation">
          <div className='name'>
            {name}
        </div>
        <img src="/smallArrow.png" alt="" srcset="" />
      </div>
      </div>
    </div>
  )
}

export default Blocks
