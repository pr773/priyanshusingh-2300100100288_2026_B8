import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Component/Navbar";
function App() {
  const [count, setCount] = useState(0)

    const name="priyanshu singh";
    let x=80;
    let y=97;
    function fun(){
      return"Inside Function fun";
    }
    function sum(a,b){
      return a+b;
    }
    return(
      <div>
        <h1>Priyanshu Singh</h1>
        <h2> welcome ! {name}</h2>
        <h3>My first project {x+y}</h3>
        <h4>Function of JSX {fun()}</h4>
        <h5>{sum(40,66)}</h5>
      </div>
  );
  }
export default App