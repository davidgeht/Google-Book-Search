import React, { Component } from "react";
import BookSearch from "./bookSearch";
import SearchResults  from './searchResults';

class Search extends Component{
    render(){
        return (
            <div className="Search">
                <BookSearch/>
                <SearchResults/>
            </div>
        )
    }
}

export default Search;