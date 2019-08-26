import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
const details = {
    name:"peter",
    age:15
}
let person1 = {
    name:"TS",
    first_name:"Tony",
    last_name:"Stark",
    age:45
}
let person2 = {
    name:"PP",
    first_name:"Peter",
    last_name:"Parker",
    age:16
}
let person3 = {
    name:"SH",
    first_name:"Sherlock",
    last_name:"Holmes",
    age:28
}
let persons = [person1,person2,person3];
class App extends React.Component{
    render(){
        return <div className="main">
            <Header name="tony"/>
            <div className="container">
                <div className="left-nav">
                    <ul>
                        {persons.map(person=>{
                            return <Person person={person}/>
                        })}
                    </ul>
                </div>
                <div className="details-container" id="details-container-id">
                    
                </div>
            </div>
            <Footer/>
        </div>;
    }
}
class Person extends React.Component{
    render(){
        return <li onClick={this.personClicked.bind(this)}>
            {this.props.person.name}
        </li>
    }
    personClicked(){
        console.log("personClicked");
        console.log(this.props.person.name);
        let detailsContainer = document.getElementById("details-container-id");
        ReactDOM.render(<PersonDetails person={this.props.person}/>,detailsContainer);
    }
}
class PersonDetails extends React.Component{
    render(){
        return <div>
            <h1> Person Details : </h1>
            <div className="first-name">
                <span> First Name </span>
                <input type="text" value={this.props.person.first_name} />
            </div>
            <div className="last-name">
                <span> Last Name </span>
                <input type="text" value={this.props.person.last_name} />
            </div>
            <button className="update-button"> Update </button>
        </div>
            
    }
}
const rootElement = document.getElementById("content");
ReactDOM.render(<App />,rootElement);