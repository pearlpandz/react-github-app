import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card">
      <img src={avatar_url} alt="" />
      <h4>{login.toUpperCase()}</h4>
      <Link to={`/user/${login}`}>more</Link>
    </div>
  );
}


export default UserItem;
