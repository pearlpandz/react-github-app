import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserList from './components/users/List'
import SingleUser from './components/users/Single';
import axios from 'axios';
import PropTypes from 'prop-types';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/helpers/Search';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    getUsers();
  }, [])

  const getUsers = async() => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`);
    setUsers(res.data);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }


  const searchUsers = async (e) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${e}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`);
    setUsers(res.data.items);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`);
    setUser(res.data);
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }

  return (
    <Router>
      <div className="app">
        <Navbar title="Github Finder" icon="fab fa-github" />

        <div className="container page-content">
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search searchUsers={searchUsers} />
                <UserList loading={loading} users={users} />
              </Fragment>
            )} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" render={props => (
              <SingleUser {...props} loading={loading} user={user} getUser={getUser} />
            )} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


App.propTypes = {
  searchNavUsers: PropTypes.func
};

export default App;
