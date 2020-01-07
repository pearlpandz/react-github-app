import React, { useState } from 'react'
import './Search.css'

const Search = ({ searchUsers, }) => {
    const [search, setText] = useState('');

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        searchUsers(search);
    }

    return (
        <div className="search-form">
            <form onSubmit={onSubmit}>
                <input type="text" name="search" placeholder="search user..." value={search} onChange={onChange} />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
    )

}

export default Search
