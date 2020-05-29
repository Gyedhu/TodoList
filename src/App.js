import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Logo from './Logo';

import { connect } from 'react-redux';
import { textFieldChange } from './action';

const mapStateToProps = (state) => {
  return { text: state.text }
}

const mapDispatchToProps = (dispatch) => {
  return { textFieldChange: (event) => dispatch(textFieldChange(event.target.value)) }
}

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <Logo />
        <div className='w-100 w-70-m w-40-ns center pb4 ma5'>
          <h1 style={{ textShadow: '0 0 5px black' }} className='tc f1 light-gray'>Todo List</h1>
          <AddTodo />
        </div>
        <TodoList todos={[]} />
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
