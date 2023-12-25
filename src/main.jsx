import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { Context } from "./Context"

const node = document.getElementById("root")
createRoot(node).render((
  <Context>
    <App />
  </Context>
))
