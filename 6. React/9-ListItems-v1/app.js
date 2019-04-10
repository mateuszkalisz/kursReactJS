const Item = (props) => {

  const {fruit} = props;

  return(
    <li>{`owoc ${fruit}`}</li>
  )
}

class ListItems extends React.Component {
state = {
  fruits: ["jabłko", "śliwka", "gruszka"],
}

render(){
  return(
    <ul>
      {this.state.fruits.map(fruit=><Item key={fruit} fruit={fruit}/>)}
    </ul>
  )
}
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
