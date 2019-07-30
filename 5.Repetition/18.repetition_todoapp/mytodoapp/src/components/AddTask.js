import React,{Component} from 'react';
import './AddTask.css'

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);

    state = {
        text: '',
        checked: false,
        date: this.minDate,
    }

    handleChangeDate= (e) =>{
        this.setState({
            date: e.target.value,
        })
    }

    handleChangeText = (e) =>{
        this.setState({
            text: e.target.value,
        })
    }

    handleChangeCheckBox = (e) =>{
        this.setState({
            checked: e.target.checked,
        })
    }

    render() { 

        let maxDate = this.minDate.slice(0,4) *1 +1;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <input type="text" value={this.state.text} onChange={this.handleChangeText} placeholder="dodaj zadanie"/> 
                <input type="checkbox" id="important" checked={this.state.checked} onChange={this.handleChangeCheckBox}/>
                <label htmlFor="important">Priorytet</label>
                <br/>
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleChangeDate}/>
                <button>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;