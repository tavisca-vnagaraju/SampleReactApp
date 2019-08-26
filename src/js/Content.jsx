import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component{
    render(){
        return <table>
            <tr>
                <th> Name </th>
                <th> Age </th>
            </tr>
            <tr>
                <td> Tony </td>
                <td> 50 </td>
            </tr>
            <tr>
                <td> Parker </td>
                <td> 16 </td>
            </tr>
            <tr>
                <td> {this.props.userInfo.name} </td>
                <td> {this.props.userInfo.age} </td>
            </tr>
        </table>
    }
}

module.exports = Content;
