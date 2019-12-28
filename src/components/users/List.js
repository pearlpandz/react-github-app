import React from 'react';
import UserItem from './Item';
import PropTypes from 'prop-types';
import Spinner from './../helpers/Spinner'
import './List.css'

const UserList = ({ users, loading }) => {
  if (loading) {
    return (
      <div className="spinner">
        <Spinner />
      </div>
    )
  } else {
    return (
      <div className="cards">
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default UserList;
