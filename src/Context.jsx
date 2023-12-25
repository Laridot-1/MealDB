import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const useGlobalContext = () => useContext(AppContext)

const urlCategories = "https://www.themealdb.com/api/json/v1/1/categories.php"
const urlCategory = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

const Context = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("Beef")
  const [meals, setMeals] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const res = await fetch(urlCategories)
        const data = await res.json()
        // console.log(data)
        if (data?.categories) {
          const { categories } = data
          // const { strCategory } = categories[0]
          setCategories(categories)
          // setCategory(strCategory)
        }
        else setCategories([])
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    if (category === "") return
    const fetchMeals = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${urlCategory}${category}`)
        const data = await res.json()
        if (data?.meals) setMeals(data.meals)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchMeals()
  }, [category])

  const obj = {
    loading,
    categories,
    category,
    meals,
    setCategory,
    isSidebarOpen,
    toggleSidebar
  }

  return (
    <AppContext.Provider value={obj}>
      {children}
    </AppContext.Provider>
  )
}

export { useGlobalContext, Context }
