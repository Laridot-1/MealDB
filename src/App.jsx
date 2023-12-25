import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import SingleMeal from "./Pages/SingleMeal"
import Err from "./Pages/Error"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meal/:id" element={<SingleMeal />} />
          <Route path="*" element={<Err />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
