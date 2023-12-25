import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../Component/Loading"

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

const Meal = () => {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isWindow, setIsWindow] = useState(false)

  useLayoutEffect(() => {
    if (window.innerWidth >= 800) setIsWindow(true)
  }, [window.innerWidth])

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${url}${id}`)
        const data = await res.json()
        const { meals } = data
        if (meals) {
          const { strMeal, strMealThumb, strArea, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20 } = meals[0]
          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20]
          setMeal({ strMeal, strMealThumb, strArea, strInstructions, ingredients })
        }
        else setMeal(null)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchMeal()
  }, [])

  if (loading) return <Loading />

  const { strMeal, strMealThumb, strArea, strInstructions, ingredients } = meal


  return (
    <article className="single-meal">
      <div>
        <img src={strMealThumb} alt="img" />
        <div>
          <p>
            <span>Name: </span>
            {strMeal}
          </p>
          <p>
            <span>Area: </span>
            {strArea}
          </p>
          <ul>
            <span>Ingredients: </span>
            <div>
              {
                ingredients.map((ingredient, id) => {
                  if (!ingredient) return
                  return <li key={id}>{ingredient}</li>
                })
              }
            </div>
          </ul>
        </div>
      </div>
      <p>
        <span>Instructions: </span>
        {
          isCollapsed && !isWindow ?
            strInstructions.slice(0, 200) + "..."
            :
            strInstructions
        }{" "}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "read more" : "show less"}
        </button>
      </p>
    </article>
  )
}

export default Meal
