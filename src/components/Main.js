import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from "../store";
import { addTodo } from "../actions/todoActions";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      todo: ""
    }
  }

  render() {
    const todos = [];
    return (
      <center>
      <div>
        <h1>Todo List</h1>
        { this.props.todos.map((todo, index) =>
            <p className="badge bg-secondary text-wrap" key={ index }>{ todo }</p>
          )
        }

        <br></br>

        <input className="form-control-sm" placeholder="Add todo here"
               onChange={ this.onChange } />
               <br></br>
               <br></br>
        <button className="btn btn-primary" onClick={ this.addTodo }>
          Add todo!
        </button>
      </div>
      </center>
    );
  }

  onChange = event => {
    this.setState({ todo: event.target.value });
  }

  addTodo = () => {
    store.dispatch(
      addTodo(this.state.todo)
    );
  }
}

const mapStateToProps = (store) => {
  return {
    todos: store.todos
  }
}

export default connect(mapStateToProps)(Main);
