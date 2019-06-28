import React from 'react';
import './App.css';
import { FaTrashAlt, FaCheck, FaPlus, FaTimes } from "react-icons/fa"

class Task  extends React.Component {
  render() {
    return(
      <li>Something to do{}<button className="btn btn-red delete"> <FaTimes /> </button></li>
    );
  }
}

class List extends React.Component {
  renderTask() {
    return <Task />;
  }
  render() {
    //const tasks;
    return(
      <ul id="list">
        <Task />
        <Task />
        {}
      </ul>
    );
  }
}

class Control extends React.Component {
  render() {
    return(
      <div id="control">
        <button className="btn btn-red"><FaTrashAlt /> Clear All</button>
        <button className="btn btn-orange"><FaCheck /> Clear Completed</button>
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return(
      <div id="input">
        <input type="text" value="New tesk" />
        <button className="btn btn-blue"><FaPlus /> Add </button>
      </div>
    );
  }
}

class Header extends React.Component {
  componentDidMount() {
    document.title = "Todo-list";
  }
  constructor(props) {
    super(props);
    this.state = {
      leftTask: 0,
    }
  }

  render() {
    return(
      <div id="header">
        <span className="h1">Tasks </span>
        ({this.state.leftTask})
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Control />
      <List />
    </div>
  );
}

export default App;
