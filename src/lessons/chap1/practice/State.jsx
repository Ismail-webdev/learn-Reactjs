import { Component } from "react";

class State extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ismail",
    };
  }
  render() {
    return (
      <div>
        <h1>Hi {this.state.name}</h1>
        <button
          onClick={(e) => {
            this.setState(
              () => {
                return {
                  name: "zayed", //Swallow merge above state
                };
              }
              //   ,()=>{
              //     console.log(this.state)  //clg after fully updated  Callvack is Optional
              //   }
            );
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default State;
