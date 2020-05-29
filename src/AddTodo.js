import React from 'react';
import './AddTodo.css';

import { connect } from 'react-redux';
import { textFieldChange, addTodoList } from './action';

const mapStateToProps = (state) => ({
	text: state.text
});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (event) => dispatch(textFieldChange(event.target.value)),
	onTodoClick: () => dispatch(addTodoList())
});

const AddTodo = ({ text, onFieldChange, onTodoClick }) => {
	return (
		<div className='add-todo'>
			<input
				type='text'
				onChange={onFieldChange}
				value={text}
			/>
			<div className='todo-buttons'>
				<button
					onClick={onTodoClick}
				>Add Todo</button>
			</div>
		</div>
	);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
