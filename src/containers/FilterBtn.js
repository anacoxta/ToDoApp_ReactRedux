import { connect } from 'react-redux'
import { setFilter } from '../actions/actions'
import Btn from '../components/Btn'

const mapStateToProps = (state, newProps) => ({
  pending: newProps.filter === state.Filter
})

const mapDispatchToProps = (dispatch, newProps) => ({
  onClick: () => dispatch(setFilter(newProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Btn)
