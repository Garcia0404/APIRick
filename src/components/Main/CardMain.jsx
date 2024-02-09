import React from 'react'

export const CardMain = ({name,image,location,episode,type,status}) => {
  
  return (
    <article className='bg-gray-200 rounded-xl shadow-md hover:scale-105 transition-all'>
      <img className='w-full rounded-t-xl' src={image} alt="img" />
      <div className='p-4 text-xs'>
        <h3 className='mb-3'><strong className='text-[#00205B] text-xl'>{name}</strong></h3>
        <h3><strong>Ubicación: </strong>{location}</h3>
        <p><strong>First seen: </strong>{episode.substring(32,43)}</p>
        <p><strong>Tipo: </strong>{type}<br></br></p>
        <p><strong>Estado: </strong>{status}</p>
      </div>
    </article>
  )
}
