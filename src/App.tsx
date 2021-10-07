import React from "react";
import logo from "./logo.svg";
import "./App.css";

const welcomebutton=()=>{
    console.log("hello");
    alert("Welcome!");
};



function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick= {()=>welcomebutton()} >
          Welcome!
                </p>
                
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    
          Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
