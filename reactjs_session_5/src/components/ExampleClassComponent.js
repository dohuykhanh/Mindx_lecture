import { Component } from "react";

export class ExampleClassComponent extends Component {
  state = {}
  constructor() {
    super();
    console.log("This is constructor event");
    this.state = {
        count: 0
      };
  }

  componentDidMount() {
    console.log("This is componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("This is shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("This is componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("This is componentWillUnmount");
  }

  handleIncrement = () => {
    return this.setState(undefined,  {
        count: 2
    });
  };

  // return (<div></div>) => function component
  render() {
    return (
      <div>
        This is ExampleClassComponent
        <button onClick={() => this.setState({ count: this.state.count + 1  })}>Click me</button>
        <button>{this.state.count}</button>
      </div>
    );
  }
}
