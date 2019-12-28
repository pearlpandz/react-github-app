import React, { Component } from 'react';
import './Item.css';
class UserItem extends Component {
 
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card">
        <img src={avatar_url} alt="" />
        <h4>{login.toUpperCase()}</h4>
        <a href={html_url}>more</a>
      </div>
      );
  }
}


export default UserItem;
