import "./App.css"

function App() {
    const name = "Toto"

    const url = "https://www.thinkful.com/";
    const linkText = "Thinkful";
    const item = "apple";
    const price = 2;
    const count = 10;
   
    const element = (
        <div>
        <h1>
            {" "}
            Hey, {name}! 
        </h1>
            <p>Please visit <a href={url}>{linkText}</a>.</p>
            <h2>Total Purchased:</h2>
            <p>Purchased {count} {item}s for ${price} each. The total is ${count * price}.</p>
        </div>
    );
    return element;
  }

export default App;