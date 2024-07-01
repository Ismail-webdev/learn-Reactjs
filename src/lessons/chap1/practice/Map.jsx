import { Component } from "react";

class Map extends Component {
  constructor() {
    super();

    this.state = {
      persons: [
        {
          id: 1,
          name: "Jack",
        },
        {
          id: 2,
          name: "Lucci",
        },
        {
          id: 3,
          name: "Hordy",
        },
      ],
    };
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
