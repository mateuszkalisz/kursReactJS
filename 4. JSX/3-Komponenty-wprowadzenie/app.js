//komponent funkcyjny

const Header = () => {
  return(
    <div>
      <h1>Witaj na stronie</h1>
    </div>
  )
}

//komponent klasowy

class Blog extends React.Component{
  state = {
    number: 0,
  }
  render(){
    return(
      <section>
        {/*Przykładowy komentarz*/}
        <h2>Artykuł nr {this.state.number}</h2>
        <p>Artykuł Artykuł Artykuł Artykuł Artykuł Artykuł</p>
      </section>
    )
  }
}

/////////////

const App = () =>{
  return(
    <>
    <Header/>
    <Blog/>
    </>
  )
}

ReactDOM.render(<App/>,document.getElementById("root"));