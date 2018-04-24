import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>
          <CardBody increase={this.handleIncrement} decrease={this.handleDecrement} count={this.state.count}/>
      </div>
    );
  }
}

const CardBody = props => 

<div className="card-body">
  <p className="card-text">Click Count: {props.count}</p>
  <button className="btn btn-primary" onClick={props.increase}>
    Increment
  </button>
  <button className="btn btn-danger" onClick={props.decrease}>
    Decrement
  </button>
</div>;

export default Counter;
