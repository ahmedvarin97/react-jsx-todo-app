import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import'./todo/todo.css'
import TodoApp from './todo/Todo'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <TodoApp />
  </StrictMode>,
)
