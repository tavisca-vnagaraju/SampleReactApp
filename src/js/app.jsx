import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
let person1 = {
    index:0,
    name:"TS",
    first_name:"Tony",
    last_name:"Stark",
    age:45
}
let person2 = {
    index:1,
    name:"PP",
    first_name:"Peter",
    last_name:"Parker",
    age:16
}
let person3 = {
    index:2,
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
            age:0,
            index:0
        };
    }
    changeState(person){
        this.setState({
            name:person.name,
            first_name:person.first_name,
            last_name:person.last_name,
            age:person.age,
            index:person.index
        });
        let detailsContainer = document.getElementById("details-container-id");
        detailsContainer.style.display = "";
    }
    componentDidMount(){
        let detailsContainer = document.getElementById("details-container-id");
        detailsContainer.style.display = "none";
    }
    inputChangedHandlerFirstName(event){
        this.setState({
            first_name:event.target.value
        })
    }
    inputChangedHandlerLastName(event){
        this.setState({
            last_name:event.target.value
        })
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
                    <h1> Person Details : </h1>
                    <div className="first-name">
                        <span> First Name </span>
                        <input onChange={(event)=>this.inputChangedHandlerFirstName(event)} type="text" value={this.state.first_name} id="first-name-id" />
                    </div>
                    <div className="last-name">
                        <span> Last Name </span>
                        <input onChange={(event)=>this.inputChangedHandlerLastName(event)} type="text" value={this.state.last_name} id="last-name-id" />
                    </div>
                    <button className="update-button" onClick={this.updateClicked.bind(this)}> Update </button>
                </div>
            </div>
            <Footer/>
        </div>;
    }
    updateClicked(){
        let first_name_value = document.getElementById("first-name-id").value;
        let last_name_value = document.getElementById("last-name-id").value;
        let index = this.state.index;
        persons[index].name = (first_name_value.substring(0,1)).concat("",last_name_value.substring(0,1));
        persons[index].first_name = first_name_value;
        persons[index].last_name = last_name_value;
        const rootElement = document.getElementById("content");
        ReactDOM.render(<App />,rootElement);
        console.log(this.state);
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
const rootElement = document.getElementById("content");
ReactDOM.render(<App />,rootElement);