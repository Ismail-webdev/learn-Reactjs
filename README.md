# Reactjs

## Introduction

React.js is a popular JavaScript library used for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components, manage the state of their application efficiently, and ensure a smooth, responsive user experience.

<details>
<summary><strong>Class Component</strong></summary>

<h3>Class Component</h3>
<p>A class component is a more traditional way of defining components in React. It uses ES6 class syntax and extends from React.Component. This allows you to use state and lifecycle methods, providing more control over the component's behavior and rendering.</p>

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default MyComponent;
```

<h3>State</h3>
<p>State is a built-in object in React components used to store data or information about the component's current situation. It is managed within the component and can change over time, usually as a result of user actions or network responses.</p>

```jsx
import { Component } from "react";

class State extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jack",
    };
  }
  render() {
    return (
      <div>
        <h1>Hi {this.state.name}</h1>
        <button
          onClick={(e) => {
            this.setState(() => {
              return {
                name: "John",
              };
            });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default State;
```

<h3>Map Function & Key Prop</h3>
<p>The map function is used to render a list of elements by iterating over an array and returning a new array with the rendered elements. This is useful for rendering dynamic lists in React.
<br/>
In React, when rendering a list of elements using the map function, each rendered item must have a unique key prop. This key prop helps React identify which items have changed, are added, or are removed. It is important for performance and efficient rendering of lists.</p>

```jsx
import React, { Component } from "react";

class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      items: ["Item 1", "Item 2", "Item 3"],
    };
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
```

<h3>How Class Component work under Hood</h3>
<p>In a React class component, the code execution follows a specific order. Here’s a step-by-step breakdown of what runs first and the sequence of operations:</p>
<<<<<<< HEAD
<h4>1. Constructor</h4>
=======
<br/>
<h4>Constructor</h4>
>>>>>>> 329bbb06e09b590f359f7f4e9bf00c60b76a0e75
<p>If a constructor is defined,it runs first.</p>
<p>Initializes state and binds methods.</p>

```jsx
<<<<<<< HEAD
constructor() {
  super();
=======
constructor(props) {
  super(props);
>>>>>>> 329bbb06e09b590f359f7f4e9bf00c60b76a0e75
  this.state = {
    count: 0
  };
  // Any other initialization code here
}
<<<<<<< HEAD
```

<h4>2. Render Method</h4>
<p>After the constructor, the render method is called.</p>
<p>It returns the JSX that defines what should be rendered on the screen.</p>

```jsx
render() {
  return (
    <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.handleIncrement}>Increment</button>
    </div>
  );
}

```

<h4>3. ComponentDidMount</h4>
<p>Once the initial render is completed and the component is mounted to the DOM, componentDidMount is called.</p>
<p>This is a good place to make network requests or perform any setup that requires the component to be in the DOM.</p>

```jsx
componentDidMount() {
  console.log('Component did mount');
}
```

<h4>Example</h4>

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();
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

export default MyComponent;
```

</details>
=======

```
<br/>
</details>
>>>>>>> 329bbb06e09b590f359f7f4e9bf00c60b76a0e75
