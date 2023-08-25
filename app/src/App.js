import React from 'react'
import './App.css'
import { useState } from 'react';
const App=()=> {
  let itime=new Date().toLocaleTimeString();
  const [time, setTime] = useState(itime);

  const updateTime=()=>{
    
  let itime=new Date().toLocaleTimeString();
  setTime(itime);
  }
  setInterval(updateTime,1000)
  return (
   <div >
    <h1 className='heading'>Digital Clock
      </h1>
      <h2 className='clock'>{time}</h2>
      
   </div>
  )
};
export default App;
