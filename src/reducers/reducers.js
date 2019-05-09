import { combineReducers } from 'redux'
import { Filters } from '../actions/actions'

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id === action.id)
          ? {...task, completed: !task.completed}
          : task
      )
    default:
      return state
  }
}

const Filter = (state = Filters.FILTER_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  tasks,
  Filter
})