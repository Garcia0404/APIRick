import React, { useEffect, useState } from 'react'
import { apiRYM } from '../../helper/RickAndMorty'
import { CardMain } from './CardMain'

export  const SectionMain = ({nombre}) => {
  const [imagenes, setImagenes] = useState([])
  useEffect(()=>{
    apiRYM(nombre).then(res=>setImagenes(res.results))
  },[nombre])
  return (
    <section className='grid grid-cols-1 min-[350px]:grid-cols-2 min-[530px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 p-7'>
      {imagenes.map((imagen)=>(
        <CardMain key={imagen.id} name={imagen.name} image={imagen.image} location={imagen.location.name} episode={imagen.episode[0]} type={imagen.type} status={imagen.status}/>
      ))}
    </section>
  )
}
