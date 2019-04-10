class ListItems extends React.Component {
state = {
  fruits: ["jabłko", "śliwka", "gruszka"],
}

render(){
  return(
    <ul>
      {this.state.fruits.map((fruit,id)=><li key={fruit} numer={id}>{`owoc ${fruit}`}</li>)}
    </ul>
  )
}
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
