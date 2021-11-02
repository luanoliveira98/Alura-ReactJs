import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <div>
        <RegisterForm/>
        <NoteList/>
      </div>
    );
  }
}

export default App;
