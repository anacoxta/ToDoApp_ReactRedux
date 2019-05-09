import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/actions'

const AddTask = ({ dispatch }) => {
  let input
  return (
    <>
      <form className='form' onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) { return  }
        dispatch(addTask(input.value))
        input.value = '' }}>
        <input ref={node => input = node} placeholder='Adicione uma tarefa'/>
      </form>
    </>
  )
}

export default connect()(AddTask)
