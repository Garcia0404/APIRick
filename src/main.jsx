import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Navbar, SearchForm} from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <header>
      <Navbar/>
    </header>
    <main>
      <SearchForm/>
    </main>
  </>
)
