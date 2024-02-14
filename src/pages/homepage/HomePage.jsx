import React from 'react'
import { Navbar,SearchForm } from '../../components'
export const HomePage = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <SearchForm/>
      </main>
    </>
  )
}
