import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({ idMeal, strMeal, strMealThumb }) => {
  const url = `meal/${idMeal}`
  return (
    <article className="meal">
      <Link to={url}>
        <img src={strMealThumb} alt="meal" />
        <p>{strMeal}</p>
      </Link>
    </article>
  )
}

export default Meal
