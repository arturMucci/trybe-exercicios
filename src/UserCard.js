import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
  render() {
    const { user } = this.props;
    const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    return (
      "Carregando" && <li className='users'>
        <p>{name}</p>
        <img src={user.picture.large} alt={name} />
        <p>Email: {user.email}</p>
        <p>Age: {user.dob.age}</p>
      </li>
    )
  }
}

export default UserCard;
