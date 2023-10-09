import './App.css';
import { useState } from 'react';

function App() {
  const [code, setCode] = useState("");
  const [count,setCount] = useState(0);

  const handleChange = (value) => {
    setCode(value);
    let str = value.replace(/\s/g,'');
    setCount(str.length);
  }

  const handleClear = () => {
    setCode('');
    setCount(0);
  }
  return (
    <div className="App">
      <h1>{"<MiniCode/>"}</h1>
      <div className='grid'>
        <div className='grid-item'>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
         <h2>Paste here</h2>
         <button className='btn' onClick={() => handleClear()}>Clear</button>
         </div>
         <textarea style={{width:"100%", resize:'none'}}   rows={30} value={code} onChange={(e)=>handleChange(e.target.value)}></textarea>
        </div>
        <div className='grid-item'>
          <h2>Character Count = {count}</h2>
          <ul>
            <li>Spaces, Tabs and Newline characters are excluded in the count.</li>
            <li>Comments in the code contribute to count, make sure to remove them.</li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default App;
