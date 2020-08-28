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
      pictures: [],
      i: 0,
      imageUrl: []
    }
  }
  
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY 
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=30/&client_id=${API_KEY}&query=anime`
    fetch(url)
      .then(res => res.json())
      .then(jsonRes => {
        console.log('==========================')
        console.log(jsonRes)
        console.log('==========================')
        this.setState({ pictures: jsonRes.results, imageUrl: jsonRes.results[this.state.i].urls.full })
      })
      .catch(err => {
        console.log('Something went wrong!')
      })
  }

  nextImage = () => { 
    this.state.i = this.state.i + 1

    this.setState({ imageUrl: this.state.pictures[this.state.i].urls.full })
    
    if (this.state.i === 29) {
      this.state.i = 0
    }
  }
  
  previousImage = () => {
    this.state.i = this.state.i - 1

    this.setState({ imageUrl: this.state.pictures[this.state.i].urls.full })
    
    if (this.state.i === 0) {
      this.state.i = 29
    }
  }

  render() {
    return (
      <div id="body">
        <Header />
        <Slider next={this.nextImage} previous={this.previousImage} link={this.state.imageUrl} />
        <div id="content">
        {
          this.state.pictures.map (picture => {
            return (
              <Content key={picture.id} link={picture.urls.full} />
            )
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
