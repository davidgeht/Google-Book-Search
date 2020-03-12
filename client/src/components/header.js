import React, { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Google Book Search</h1>
                        <p class="lead">Search for and save any book you'd like !</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;