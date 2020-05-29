import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

const TodoList = ({ todos }) => { 
    return (
        <div>
            <ol
                style={{ listStyleType: 'none' }}
                className='todo-list w-70 center f2 pa2 flex flex-column'>
                {todos.map((v, i) => {
                    return (<li
                        key={i}
                        className="bg-white b mv2 pa4 br2">
                        {v}
                    </li>)
                }
                )}
            </ol>
        </div>
    );
}

export default connect(mapStateToProps)(TodoList);
