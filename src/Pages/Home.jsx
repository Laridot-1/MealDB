import React from 'react'
import Meal from "../Component/Meal"
import Loading from "../Component/Loading"
import { useGlobalContext } from '../Context'

const Home = () => {
  const { loading, meals, isSidebarOpen } = useGlobalContext()

  if (loading) return <Loading />

  return (
    <section className={`home ${isSidebarOpen ? "adjust" : ""
      }`}>
      <div className="meals">
        {
          meals.map(meal => {
            return <Meal key={meal.idMeal} {...meal} />
          })
        }
      </div>
    </section>
  )
}

export default Home
