import React, { Component } from "react";

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "duy",
      age: 12,
    };
  }

  handleClick = () => {
    this.setState({ name: "asdfasdf" });
  };

  render() {
    return (
      <div>
        <pre>Class Component</pre>
        <p>You click {JSON.stringify(this.state)}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
