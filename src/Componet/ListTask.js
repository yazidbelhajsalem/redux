import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import Task from './Task'

function ListTask() {
    const Todos = useSelector((state) => state.Todos)
  return (
    <div>
        <div>

<div className="todoContainer">
  <div>
  <AddTask />
  </div>
  <div className="headerContainer">
    <h2>What's your focus today</h2>
  </div>
  <div className="bodyContainer">
    {Todos.map(todo=><Task title={todo.title} status={todo.status} id={todo.id} />)}
  </div>
</div>
</div>
    </div>
  )
}

export default ListTask