import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './TasksApp.css';


class TasksApp extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      tasks: [{
        text: 'Contratar a Ana',
        completed: false
      }, {
        text: 'Comprar banana',
        completed: false
      }]
    };
  }

  newTaskUpdated(event) {
    this.setState({
      newTask: event.target.value
    });
  }

  formSent(event) {
    event.preventDefault();

    this.setState({
      newTask: '',
      tasks: [...this.state.tasks, {
        text: this.state.newTask,
        completed: false
      }]
    });
  }

  render() {
    return (

      <div className="TasksApp">
        <header>
          <h1 className="title">To-do list</h1>
        </header>
        <main>
          <form className="form" onSubmit={(event) => this.formSent(event)}>
            <input
              type="text"
              placeholder="Adicione nova tarefa"
              aria-label="Digite aqui uma nova tarefa"
              onChange={(event) => this.newTaskUpdated(event)}
              id={"newTask"}
              name="newTask"
              value={this.state.newTask}
            />
          </form>

          <ul>
            {this.state.tasks.map(task => {
              return (
                <li className="tarefa-container" key={uuidv4()}>
                  <input type="checkbox" />
                  <span className="checkbox-nova"></span>
                  {task.text}
                </li>
                )
            })}
          </ul>
        </main>
      </div>

    );
  }
}

export default TasksApp;