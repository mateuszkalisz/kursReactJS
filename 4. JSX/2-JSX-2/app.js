const header = <h1 className = "title">Witaj na naszej stronie!</h1>

const classBig = "big";

const handleClick = function(){
  alert("kliknął");
}

const main = (
  <div>
    <h1 person="osoby" onClick={handleClick} className = "red">Pierwszy artykuł</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula dolor a dui fermentum tempus. Etiam hendrerit nec mauris quis tristique. Quisque ac dui et nunc interdum pretium a ut velit. Mauris et lobortis diam, in commodo tellus. Fusce leo nulla, commodo ac ultrices vitae, pharetra nec ipsum. Vivamus consectetur libero blandit facilisis dictum. Cras finibus porta arcu in semper. Duis scelerisque laoreet hendrerit. Aenean eget urna a eros finibus molestie non eu nibh. Praesent nisi ipsum, hendrerit ac tellus in, viverra interdum eros. Cras nec tellus commodo, cursus justo vel, egestas metus.</p>
    </div>
)

const text = "Stopka";
const smallerText = "blablablabla"

const footer = (
<footer>
  <p className={classBig}>{text}</p>
  {smallerText}
</footer>)

const app = [header,main,footer];

ReactDOM.render(app, document.getElementById("root"));