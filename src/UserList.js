import React, { Component } from 'react';
import UserCard from './UserCard';
import './UserList.css';

class UserList extends Component {
  render() {
    const { Users } = this.props;
    return (
      <ul className='listContainer'>
        {Users.map((user) => <UserCard key={user.login.uuid} user={user}/>)}
      </ul>
    )
  }
}

export default UserList;
