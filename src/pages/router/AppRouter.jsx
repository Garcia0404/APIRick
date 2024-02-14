import { Routes,Route } from 'react-router-dom'
import { HomePage } from '..'
import React from 'react'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/:name' element={<CharacterPage/>}/>
    </Routes>
  )
}
