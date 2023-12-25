import React from 'react'
import { useGlobalContext } from '../Context'

const Category = ({ text }) => {
  const { category, setCategory } = useGlobalContext()

  const handleClick = () => {
    setCategory(text)
  }

  return (
    <button className={`category btn ${category === text ? "active" : ""}`} onClick={handleClick}>{text}</button>
  )
}

export default Category
