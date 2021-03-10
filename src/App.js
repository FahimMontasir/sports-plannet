
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const animalArr = ["penguin", "deer", "dino", "tiger", "camel", "pamel", 'chemel', "damel", "memel", "hemel"]
  const products = [{ name: "photo shop", price: "400 dollar" }, { name: "illustrator", price: "399 dollar" }, { name: "premier pro", price: "200 dollar" }, { name: "adobe in design", price: "300 dollar" }]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <GetUsers></GetUsers>
        <ul>
          {
            animalArr.map(animal => <li>{animal}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd} ></Product>)
        }
        <Animal name="Tiger" danger="true"></Animal>
        <Animal name={animalArr[0]} danger="false"></Animal>
        <Animal name={animalArr[1]} danger="false"></Animal>
      </header>
    </div>
  );
}

const Animal = (props) => {
  const myStyle = {
    color: "red",
    border: "2px solid gold",
    margin: "3px",
    width: "300px"
  }
  return (
    <div style={myStyle}>
      <h4>Name: {props.name}</h4>
      <p>isDanger: {props.danger}</p>
    </div>
  )
}
function Product(props) {
  const { name, price } = props.product;
  const stylePro = {
    backgroundColor: "grey",
    height: "300px",
    width: "200px",
    margin: "20px"
  }
  return (
    <div style={stylePro}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>buy now</button>
    </div>

  )
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []
  )

  return (
    <div>
      <h1>Total users: {users.length}</h1>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}

export default App;
