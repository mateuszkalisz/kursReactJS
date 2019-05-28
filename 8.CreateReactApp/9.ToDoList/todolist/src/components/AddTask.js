import React,{Component} from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = { 
        text: '',
        checked: false,
        date: "2019-05-30",
     }
    render() { 


        return (
            <div className="form">
                <div>
                    <form>
                        <input placeholder="dodaj zadanie" type="text" value={this.state.text}/> 
                        
                        <input id="important" type="checkbox" checked={this.state.checked}/>
                        <label htmlFor="important">Priorytet</label>
                            <br/>
                        <label htmlFor="date">Do kiedy zrobić</label>
                        <input type="date" value={this.state.date} min="2019-05-28" max="2020-12-31"/>
                            <br/>
                        <button className="buttonAddTask">Dodaj</button>
                        
                    </form>
                </div>
            </div>
            
          );
    }
}
 
export default AddTask;
