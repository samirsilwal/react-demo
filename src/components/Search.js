import React, {Component} from 'react';

class Search extends Component {
    render() {
        const {filterItem}= this.props;
        return (
                    <input type='text' onChange={filterItem} placeholder='search contact...'></input>
        );
    }
}

export default Search;