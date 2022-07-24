import "./App.css";
import { useEffect, useState } from "react";
import { ExampleClassComponent } from "./components/ExampleClassComponent";

function TextMsg () {
  useEffect(() => {
   return (() => {
     console.log('Text Msg is unmount')
   }) 
  })
  return (<div>
    This is Text Msg content
  </div>)
}

function App() {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false)
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }, [isClick, count1, count2]);

  return (
    <div>
      
      <div>
        <button onClick={() => {
          setCount(count + 1)
          setIsClick(!isClick)
          }}>Click me</button>
        <p>You clicked {count} times</p>
        {isClick && <TextMsg />}
      </div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>Click me 1</button>
        <p>You clicked {count1} times</p>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Click me 2</button>
        <p>You clicked {count2} times</p>
      </div>
      <div>
        <button onClick={() => setCount3(count3 + 1)}>Click me 3</button>
        <p>You clicked {count3} times</p>
      </div>
      <ExampleClassComponent />
    </div>
  );
}

export default App;
