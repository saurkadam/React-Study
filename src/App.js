import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 24 },
      { name: 'Stphanie', age: 26 }
    ],
    userName: 'ABC',
    showPerson: false
  };

  switchNameHandler = (newName) => {
    console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 24 },
        { name: 'Stphanie', age: 26 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 24 },
        { name: 'Stphanie', age: 26 }
      ]
    });
  }
  
  userInputHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Kadam')}
            changed={this.nameChangeHandler}>My hobbies: Racing
          </Person>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler.bind(this)}>Toggle Name</button>

            <div>
              <UserInput
                changed={this.userInputHandler}
              />
              <UserOutput
                username={this.state.userName}
              />
              {persons}
            </div>


      </div>
    );
  }
}

export default App;
//use bind syntax for passing function reference