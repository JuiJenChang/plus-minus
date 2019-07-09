import React, { Component } from 'react';
import './App.css';

class Plus extends Component {
    render() {
        return (
            <div className="App-header">
                <input
                    value={this.props.num}
                />
                <div className="App-btn">
                    <button onClick={this.props.plusNum}>+</button>
                    <button onClick={this.props.minusNum}>-</button>
                </div>
            </div>
        );
    }
}

export default Plus;