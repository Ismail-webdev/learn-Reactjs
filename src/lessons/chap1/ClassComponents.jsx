import { Component } from "react";
import State from "./practice/State";
import Map from "./practice/Map";
import Flow from "./practice/Flow";

class ClassComponents extends Component {
  render() {
    return (
      <div>
        <State />
        <Map />
        <Flow />
      </div>
    );
  }
}

export default ClassComponents;
