import React, { Component } from "react";
import Header from "../Header/Header.js"
import MenuIcon from "../Header/images/hamburger-solid.png"
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

  headerImg() {
    return <img src={MenuIcon} alt="hamburger" class="hbicon" />
  }

  render() {
    return (
        <div>
            <Header menu={this.headerImg()} />
      </div>
    );
  }
}

export default App;
