import React from 'react';

const SearchBar = () =>
{
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <select>
                <option value="">All Categories</option>
                {/* Add your categories here */}
            </select>
        </div>
    );
};

export default SearchBar;