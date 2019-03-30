console.log(React);
console.log(ReactDOM);

const element = <div> Pierwszy element React </div>

const element2 = React.createElement("div",null,"Pierwszy element React");

const element3 = (
  <div>
    <p>Tekst</p>
  </div>
)

const element4 = <div><p>Tekst</p></div>

const element5 = (
  <React.Frament>
  <section></section>
  <section></section>
  </React.Frament>
)

//react fragment forma skrócona:

const element6 = (
  <>
  <section>
    <p id="el6" className = "elem6">TEKST</p>
  </section>
  <section></section>
  </>
)
