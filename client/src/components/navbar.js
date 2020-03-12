import React, { Component } from "react";
import Navitem1 from "./navitem1";
import Navitem2 from "./navitem2";




class Navbar extends Component{
    render(){
        return(
            <div className="navBar">
                <h1>Google Book Search</h1>
                <Navitem1/>
                <Navitem2/>
            </div>
        )
    }

}

export default Navbar;