import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Burger from './Burger.jsx'

let root = document.getElementById('root')

createRoot(root).render(
  <>
    <Burger/>
    <Burger/>
    <Burger/>
    <Burger/>
    <Burger/>
  </>
)