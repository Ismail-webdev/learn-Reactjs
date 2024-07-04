import { Component } from "react";

class Map extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { persons: users };
        }, console.log(this.state))
      );
  }
  render() {
    return (
      <div>
        {this.state.persons.map((person) => {
          return (
            <div key={person.id}>
              <h1>{person.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Map;
