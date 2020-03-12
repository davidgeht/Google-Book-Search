import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navitem extends Component{
    render(){
        return(
            <div id={this.props.item}>
            <Link to={this.props.toLink}>
            {this.props.item}
            </Link>
            </div>
        )
    }
}

export default Navitem;