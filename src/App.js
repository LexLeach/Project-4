import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: []
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(jsonRes => {
        console.log('====================================')
        console.log(jsonRes)
        console.log('====================================')
        this.setState({pictures: jsonRes})
    })
  }

  render() {
    return (
        <div>
            Testing
      </div>
    );
  }
}

export default App;
