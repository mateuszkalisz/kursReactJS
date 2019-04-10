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
  const items = this.state.fruits.map(fruit=><Item key={fruit} fruit={fruit}/>)
  return(
    <ul>
      {items}
    </ul>
  )
}
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
