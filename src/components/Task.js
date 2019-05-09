import React from 'react'

const Task = ({ onClick, completed, text }) => (
  <li
  className='tarefa-container'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'var(--cinza-claro)' : 'white'
    }}
  >

      <input type="checkbox" />
      <span className="checkbox-nova"></span>

    {text}
  </li>
)

export default Task
