import './App.css';
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

function App() {
  const [state,setState]= useState([])
  return (
    <div>
      <button onClick={()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
            console.log(Response.data);
            setState(Response.data)
          })
      }}
      >click</button>
        {state.map((obj,index)=>{
          return(
            <div>
              <h1>
                {index + 1}
              </h1>
              <h2>
                {obj.title}
              </h2>
              <h4>
                {obj.body}
              </h4>
            </div>
          )
      })}
    </div>
  );
}

export default App;
