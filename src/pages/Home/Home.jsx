import React from 'react'
import Cards from '../Home/components/MenuCard/Cards'
import Title from '../Home/components/Title/Title'
import NavBar from './components/NavBar/NavBar'

function Home() {
  return (
    <div>
      <Title />
      <NavBar />
      <Cards />
    </div>
  )
}

export default Home