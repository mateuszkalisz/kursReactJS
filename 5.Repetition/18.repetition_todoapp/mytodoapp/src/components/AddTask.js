import React,{Component} from 'react';
import './AddTask.css'

class AddTask extends Component {

    state = {
        text: '',
        checked: false,
    }

    render() { 
        return (
            <div className="form">
                <input type="text" value={this.state.text} placeholder="dodaj zadanie"/> 
                <input type="checkbox" id="important" checked={this.state.checked}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value="2019-01-25" min="2019-01-01" max="2021-01-01"/>
                <button>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;