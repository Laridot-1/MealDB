import React from 'react'
import Category from "./Category"
import { useGlobalContext } from '../Context'

const Sidebar = () => {
  const { categories, isSidebarOpen } = useGlobalContext()

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div>
        <h3>categories</h3>
        <div className="underline"></div>
      </div>
      <div className="categories">
        {
          categories.map(({ idCategory: id, strCategory: category }) => {
            return <Category key={id} text={category} />
          })
        }
      </div>
    </aside>
  )
}

export default Sidebar
