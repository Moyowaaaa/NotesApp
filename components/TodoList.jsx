import React from 'react'

const TodoList = ({todo}) => {
  return (
    <>
    <li className='bg-[blue] text-white py-2 px-6 w-11/12 lg:w-5/12 mb-2 '>{todo.text}</li>

    </>
  )
}

export default TodoList