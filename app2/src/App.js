import React, { Component } from "react";
import { hot } from "react-hot-loader";

require("./styles");

class App extends Component {
    render() {
        console.log("in app")
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                still working --
            </div>
        );
    }
}

export default hot(module)(App);