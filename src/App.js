import React, { Component } from 'react';
import UserList from './UserList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Users: [],
      isLoading: false,
    }
  }

  fetchUsers = async () => {
    const url = "https://api.randomuser.me/";
    const newUser = await fetch(url)
      .then((response) => response.json())
      .then(({results}) => results[0])
    this.setState(({Users}) => ({
      Users: [...Users, newUser],
    }));
  }

  componentDidMount() {
    console.log('App: componentDidMount');
    this.fetchUsers();
  }

  render() {
    const { Users, isLoading } = this.state;
    return (
      <div className='App'>
        <h1>Trybe Users</h1>
        <button type="button" onClick={this.fetchUsers} >New User</button>
        {isLoading ? <p>Carregando...</p> : <UserList Users={Users}/>}
      </div>
    )
  }
}

export default App;
