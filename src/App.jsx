import './App.css'
import Counter from './Counter';
import Users from './Users';

function App() {
  function handleClick(){
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 Clicked");
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2 </h3>

      <Users></Users>
      
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Button 3 clicked')}}>Third</button>
      {/* when we are passing parameters from a event handler we need to use arrow function. otherwise it will be reloaded automatically */}
      <button onClick={() => addToFive(5)}>Fourth Button</button>
    </>
  )
}

export default App
