import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family: ["amber", "scarlett", "kinley", "cora"]
    };
  }

  render() {
    let myFamily = this.state.family.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{myFamily} </div>;
  }
}
export default App;
