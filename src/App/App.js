import React, { Component } from "react";
import Header from "../Header/Header.js"
import Slider from "../Slider/Slider.js"
import Content from "../Content/Content.js";
import Footer from "../Footer/Footer"
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
      .then(jsonRes => {
        console.log('==========================')
        console.log(jsonRes)
        console.log('==========================')
        this.setState({ pictures: jsonRes })
      })
      .catch(err => {
        console.log('Something went wrong!')
      })
  }

  render() {
    return (
        <div id="body">
        <Header />
        {
          this.state.pictures.map(pictures => {
            return (
              <Slider />
            )
          })}
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
