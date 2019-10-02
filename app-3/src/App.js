import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family: ["amber", "cora", "kinley", "scarlett"],
      filtered: ""
    };
  }
  filteredFamily(person) {
    this.setState({ filtered: person });
  }
  render() {
    console.log(this.state);
    let myFamily = this.state.family
      .filter((element, index) => {
        return element.includes(this.state.filtered);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className="App">
        <input
          onChange={e => this.filteredFamily(e.target.value)}
          type="text"
        />
        {myFamily}
      </div>
    );
  }
}

export default App;
