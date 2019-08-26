import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";
import Counter from "./Counter.jsx";
const details = {
    name:"peter",
    age:15
}

class App extends React.Component{
    render(){
        return <div className="main">
            <Header name="tony"/>
            <Content userInfo={details}/>
            <Counter/>
            <Footer/>
        </div>;
    }
}

const rootElement = document.getElementById("content");
ReactDOM.render(<App />,rootElement);