import React, { Component } from "react";
import Navitem from "./navitem";

class Navbar extends Component{
    render(){
        return(
            <div className="navBar" class="row">
                <div class="col-4">
                <h1>Google Book Search</h1>
                </div>
                <div class="col-3">
                <Navitem item ="Saved" toLink="/saved"/>
                </div>
                <div class="col-3">
                <Navitem item="Search" toLink="/search"/>
                </div>
            </div>
        )
    }

}

export default Navbar;