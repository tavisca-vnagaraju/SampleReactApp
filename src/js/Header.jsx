import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component{
    render(){
        return <header>
            <h1>Header {this.props.name}</h1>
        </header>
    }
}
module.exports = Header;