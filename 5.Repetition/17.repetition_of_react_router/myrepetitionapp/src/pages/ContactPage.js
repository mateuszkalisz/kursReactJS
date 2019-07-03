import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';

import '../styles/ContactPage.css';

class ContactPage extends Component{
    state={
        value: '',
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            value: '',
        })
    }
    
    handleChange = (e) =>{
        this.setState({
            value: e.target.value,
        })
    }

    render(){
        return(
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                when={this.state.value}
                message="Jesteś w trybie edycji formularza, czy na pewno chcesz opuścić tą stronę?"
                />
            </div>
        )
    }
}

 
export default ContactPage;