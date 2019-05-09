import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TasksApp from './components/TasksApp'
import Reducers from './reducers/reducers'

const store = createStore(Reducers)

render(
  <Provider store={store}>
    <TasksApp />
  </Provider>,
  document.getElementById('root')
)
