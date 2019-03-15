import React, { Component } from 'react';
import './App.css';
import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';


import NavBar from './containers/NavBar'
import AttractionContainer from './containers/AttractionContainer'
import AttractionShow from './containers/AttractionShow'
import Banner from './components/Banner'

class App extends Component {

  state = {
    attractions: [],
    attractionSelectedId: null,
  }

  componentDidMount() {
    fetch('http://localhost:3000/attractions')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          attractions: data
        })
      })
  }
  
  handleAttractionSelection = (id) => {
    this.setState({
      attractionSelectedId: id
    })
  }

  renderHomePage = () => (
    <div className="App">
      <NavBar />
      <Banner />
      <div id='attractions'>
        <AttractionContainer attractions={this.state.attractions} handleAttractionSelection={this.handleAttractionSelection} />
      </div>
    </div>
  )

  renderAttractionSelected = (props) => {
    return (
      <div className="App">
        <NavBar />
        <AttractionShow 
          attraction={this.state.attractions.filter(attraction => attraction.id === this.state.attractionSelectedId)[0]}
          {...props} 
        />
      </div>
    )
  }


  render() {
    return (
      <Switch>
        <Route exact path='/' component={this.renderHomePage} />
        <Route path='/attractions/:id' component={routerProps => this.renderAttractionSelected(routerProps)} />
      </Switch>
    );
  }
}

export default withRouter(App);
