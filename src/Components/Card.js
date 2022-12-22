import React from 'react'

function Card({key, title, image, isWatched}) {
  return (
        <div key={key} className='card'>
            <div style={{height: 300}}>
                <img alt={title} src={image} width={200}/>
            </div>
            <h3 style={{color: isWatched ? 'green' : 'red'}}>{title}</h3>
        </div>
  )
}

export default Card