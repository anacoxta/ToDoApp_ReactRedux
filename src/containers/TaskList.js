import { connect } from 'react-redux'
import TaskList from '../components/TaskList'
import { toggleTask } from '../actions/actions'
import { Filters } from '../actions/actions'

const getTasks = (tasks, filter) => {
  switch (filter) {
    case Filters.FILTER_ALL:
      return tasks
    case Filters.FILTER_COMPLETED:
      return tasks.filter(t => t.completed)
    case Filters.FILTER_PENDING:
      return tasks.filter(t => !t.completed)
    default:
      return tasks
  }
}

const mapStateToProps = state => ({
  tasks: getTasks(state.tasks, state.Filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
