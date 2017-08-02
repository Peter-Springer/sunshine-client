import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addSpace: true,
      name: '',
      disk: 0,
      memory: 0
    }
  }

  setInputValueToState(e) {
    e.preventDefault();
    this.setState({ name: e.target.value })
  }

  addSpace() {
    if (this.state.addSpace) {
      return <button onClick={() => this.setState({addSpace: !this.state.addSpace})}>Add Space</button>
    } else {
      return (
        <form>
          <label htmlFor="spaceName">Name</label>
          <input type="text" name="spaceName" onChange={(event) => this.setInputValueToState(event)}/> 
          <label htmlFor ="spaceMemory">Memory</label>
          <input type="number" name="spaceMemory" />
          <label htmlFor ="spaceDisk" >Disk </label>
          <input type="number" name = "spaceDisk"/>
          <input type="submit"/>
        </form>
      ) 
        
    }
  }


  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        {this.addSpace()}

      </div>
    );
  }
}

export default App;
