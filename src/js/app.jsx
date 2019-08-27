import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
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
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            first_name:"",
            last_name:"",
            age:0
        };
    }
    changeState(person){
        this.setState({
            name:person.name,
            first_name:person.first_name,
            last_name:person.last_name,
            age:person.age
        });
        let detailsContainer = document.getElementById("details-container-id");
        detailsContainer.style.display = "";
    }
    componentDidMount(){
        let detailsContainer = document.getElementById("details-container-id");
        detailsContainer.style.display = "none";
    }
    render(){
        return <div className="main">
            <Header name="tony"/>
            <div className="container">
                <div className="left-nav">
                    <ul>
                        {persons.map(person=>{
                            return <Person onClickPerson={this.changeState.bind(this)} person={person}/>
                        })}
                    </ul>
                </div>
                <div className="details-container" id="details-container-id">
                    <PersonDetails person={this.state}/>
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
        this.props.onClickPerson(this.props.person);
    }
}
class PersonDetails extends React.Component{
    render(){
        return <div>
            <h1> Person Details : </h1>
            <div className="first-name">
                <span> First Name </span>
                <input type="text" value={this.props.person.first_name} id="first-name-id" />
            </div>
            <div className="last-name">
                <span> Last Name </span>
                <input type="text" value={this.props.person.last_name} id="last-name-id" />
            </div>
            <button className="update-button" onClick={this.updateClicked.bind(this)}> Update </button>
        </div>
    }
    updateClicked(){
        console.log("update Clicked");
        this.props.person.first_name = document.getElementById("first-name-id").value;
        this.props.person.last_name = document.getElementById("last-name-id").value;
        console.log(this.props.person);
    }
}
const rootElement = document.getElementById("content");
ReactDOM.render(<App />,rootElement);