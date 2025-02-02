import React from 'react'
import Todo from './components/Todo'
import WeatherCard from './components/WeatherCard'
import SearchFunctionality from './components/SearchFunctionality'
import EccomerceApp from './components/EccomerceApp'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className=''>
      {/* <Todo/> */}
      {/* <WeatherCard/> */}
      {/* <SearchFunctionality/> */}
      <Routes>
        <Route path='/' element={<EccomerceApp />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
