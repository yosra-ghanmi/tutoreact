import {useState } from 'react';


function App() {
  const [Counter,setCounter]=useState(0)
  
  return (
    <div className="App">
      <button onClick={()=>setCounter((prevCount)=>prevCount -1)}>-</button>
      <h1>{Counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount +1)}>+</button>
    </div>
  );
}

export default App;
