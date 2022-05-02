import React from 'react'
import './style.css'

const SearchBar = ({ value, hanldeSearchKey, clearSearch, formSubmit,}) => (
    <div className="searchBar-wrap">
        <form onSubmit={formSubmit}>
            <input
                type="text"
                onChange={hanldeSearchKey}
                placeholder="Search By Category"
                value={value}
            />
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
)

export default SearchBar