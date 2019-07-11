import React, { Component } from 'react';
import Plus from './plus';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = ({num : 0})

    this.plusNum = this.plusNum.bind(this);
    this.minusNum = this.minusNum.bind(this);
  }

  plusNum() {
    const numPlus = this.state.num+1
    this.setState({
      num: numPlus,
    })
    console.log(this.state.num);
  }

  minusNum() {
    const numMinus = this.state.num-1
    this.setState({
      num: numMinus,
    })
  }

  render() {
    return (
      <div>
        <Plus
          plusNum = {this.plusNum}
          minusNum = {this.minusNum}
          num = {this.state.num} 
        />
      </div>
    );
  }
}

export default App;
