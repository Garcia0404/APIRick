import React, {useState} from 'react'
import { SectionMain } from './SectionMain'
export const SearchForm = () => {
  const [personaje,setPersonaje]  = useState('')
  const [searchPersonaje,setSearchPersonaje] = useState('')

  function onchange(e){
    setPersonaje(e.target.value)
  }
  function searchP(e){
    e.preventDefault()
    if(personaje){
      setSearchPersonaje(personaje)
      setPersonaje('')
    }
  }
  return (
    <>
      <form onSubmit={searchP} className='relative w-11/12 md:w-2/3 mx-auto my-8 text-sm'>
        <input onChange={onchange} value={personaje} className='p-3 border border-[#00205B] rounded-3xl w-full' type="text" placeholder='Ingrese el nombre del personaje ...'/>
        <label>
          <svg className="bg-[#00205B] h-full p-3 absolute top-0 right-0 bottom-0 rounded-e-3xl stroke-white my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <button aria-label='Buscar personaje' type='submit'></button>
        </label>
      </form>
      <SectionMain nombre={searchPersonaje}></SectionMain>
    </>
  )
}
