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

export { addTask, toggleTask }