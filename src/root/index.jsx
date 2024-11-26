import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todopage from '../pages/todopage'

const Root = () => {
  return (

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Todopage/>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default Root