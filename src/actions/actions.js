
let nextTaskId = 0

const addTask = text => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  text
})

const toggleTask = id => ({
  type: 'TOGGLE_TASK',
  id
})

const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

const Filters = {
  FILTER_ALL: 'FILTER_ALL',
  FILTER_COMPLETED: 'FILTER_COMPLETED',
  FILTER_PENDING: 'FILTER_PENDING'
}

export { addTask, toggleTask, setFilter, Filters }