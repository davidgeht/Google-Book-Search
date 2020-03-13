import React, { Component } from "react";

class BookSearch extends Component{
    render(){
        return(
            <div className="searchBar">
                <from>
                    <div class="form-group">
                        <label for="booksearch">Book Search</label>
                        <input type="booksearc" class="form-control" id="searchbar" aria-describedby="searchHelp"/>
                        <small id="searchHelp" class="form-text text-muted">Search for whichever book you'd like !</small>
                        <button>Search</button>
                    </div>
                </from>
            </div>
        )
    }
}

export default BookSearch