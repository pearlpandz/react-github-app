import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserList from './components/users/List'
import axios from 'axios';
import PropTypes from 'prop-types';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/helpers/Search';

class App extends Component {

  state = {
    users: [],
    loading: false
  };

  static propTypes = {
    searchNavUsers: PropTypes.func
  };

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`);
    setTimeout(() => {
      this.setState({ users: res.data, loading: false })
    }, 2000);
  }


  searchUsers = async e => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${e}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`);
    setTimeout(() => {
      this.setState({ users: res.data.items, loading: false });
    }, 2000);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar title="Github Finder" icon="fab fa-github" />

          <div className="container page-content">
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} />
                  <UserList loading={this.state.loading} users={this.state.users} />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
