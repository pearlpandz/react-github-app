import React, { Component } from 'react'
import './Search.css'

export class Search extends Component {
    state = {
        search: ''
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.search);
        // this.setState({ search: '' });
    }

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="search" placeholder="search user..." value={this.state.search} onChange={this.onChange} />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default Search
