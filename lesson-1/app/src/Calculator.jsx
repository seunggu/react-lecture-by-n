import React from 'react';

import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  render() {
    return (
      <div>
        Value: {this.state.value}
        <Button color="blue" onClick={this.handleClick}>
          {this.props.buttonText}
        </Button>
      </div>
    );
  }
}

export default Calculator;
