import React from 'react'
import gif from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner">
        <img src={gif} />
        <span>loading</span>
      </div>
    </div>
  )
}

export default Loading
