import React from 'react'
import FilterBlock from './FilterBlock'

import AppHeader from './AppHeader'
import AddTask from '../containers/AddTask'
import TaskList from '../containers/TaskList'

const TaskApp = () => (
  <div className='app'>
    <AppHeader />
    <AddTask />
    <TaskList />
    <FilterBlock />
  </div>
)

export default TaskApp
