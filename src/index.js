import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TaskApp from './components/TaskApp'
import Reducers from './reducers/reducers'

const store = createStore(Reducers)

render(
  <Provider store={store}>
    <TaskApp />
  </Provider>,
  document.getElementById('root')
)
