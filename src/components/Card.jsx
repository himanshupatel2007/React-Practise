import React from 'react'

const Card = (data) => {
    return (
        <div className='card'>
            <h1>{data.name} {data.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi a nam, consequuntur sint consequatur minus maiores similique? Magnam repudiandae laudantium corrupti, illum corporis praesentium assumenda blanditiis sint reiciendis facilis?</p>
            <h3>About</h3>
            <p>{data.about}</p>
        </div>
    )
}

export default Card
