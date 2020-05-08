import React from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../actions/todo.actions';

const AddToDo = ({addToDo}) =>{

    let input;

    const handleSubmit = (e) =>{
        const value = input.value.trim();
        addToDo(value);
    }

    return(
        <div>
            <input type="text" ref={txt => input = txt}/>
            <button type="submit" onClick={handleSubmit}>Dodaj zadanie</button>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addToDo: (text) => dispatch(addToDo(text))
})

export default connect(null, mapDispatchToProps)(AddToDo);