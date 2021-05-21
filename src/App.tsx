import React from 'react';
import './App.css';
import mini1 from './img/mini1.png';
import { useState } from "react"

function App() {

  const [name, setName] = useState("circle")

  let startRotation = () => {

    setName("circle start-rotate");

    setTimeout(() =>{

      setName("circle start-rotate stop-rotate " + Math.floor(Math.random() * 10000) +1);

    })
  }
  return (
    <div>
      <ul className={name}>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          <img src="mini1" alt=""/>
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          2
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          3
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          4
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          6
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          7
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          8
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          9
        </div>
      </li>
      <li>
        <div className="text-center"
        contentEditable="true"
        spellCheck="false"
        >
          10
        </div>
      </li>
      </ul>
      <button className="spin-button" onClick={startRotation}> Gira a roleta!</button>
    </div>
  );
}

export default App;
