import React from 'react';
import {connect} from 'react-redux';
import ToDo from '../components/ToDo';
import {toggleToDo} from '../actions/todo.actions';
import {AVAILABLE_FILTERS} from '../actions/todo.actions';

const ToDoList = ({todos, toggleToDo}) =>{

return(
    <div>
        <ul>
            {todos.map(todo => (<ToDo key={todo.id} complete={todo.complete} text={todo.text} onClick={()=>toggleToDo(todo.id)}/>))}
        </ul>
    </div>
)
};

const filterToDos = (todos, filter) =>{
    switch(filter){
        // case AVAILABLE_FILTERS.SHOW_ALL:
        //     return todos;
        case AVAILABLE_FILTERS.SHOW_ACTIVE:
            return todos.filter(todo => !todo.complete);
        case AVAILABLE_FILTERS.SHOW_COMPLETE:
            return todos.filter(todo => todo.complete);
        default: 
            return todos;
    }
}

const mapStateToProps = state =>({
    todos: filterToDos(state.todos, state.filter)
})

// const mapDispatchToProps = dispatch =>({
//     toggleToDo: (id) => dispatch(toggleToDo(id))
// })

//lub:

const mapDispatchToProps = {
    toggleToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);