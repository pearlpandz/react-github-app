import React, { Component } from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

class UserItem extends Component {
 
  render() {
    const { login, avatar_url } = this.props.user;

    return (
      <div className="card">
        <img src={avatar_url} alt="" />
        <h4>{login.toUpperCase()}</h4>
        <Link to={`/user/${login}`}>more</Link>
      </div>
      );
  }
}


export default UserItem;
