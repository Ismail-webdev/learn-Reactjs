import React, { Component } from "react";

class Flow extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Flow;
