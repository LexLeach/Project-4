import React, { Component } from "react";
import Header from "../Header/Header.js"
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pictures: []
    }
  }
  
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY 
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=30/&client_id=${API_KEY}&query=popular`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log('==========================')
        console.log(res)
        console.log('==========================')
      })
      .catch(err => {
        console.log('Something went wrong!')
      })
      this.setState({pictures: this.res})
  }

  render() {
    return (
        <div>
            <Header />
      </div>
    );
  }
}

export default App;
