import React, { Component } from "react";
import api from "../../api";

export default class StreetArtDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streetArt: []
    };
  }

  render() {
    return (
      <div className="street-art-detail">
        <h1>Street Art Detail</h1>
          <img src={this.state.streetArt.pictureUrl} alt=""/>
          <p><strong>Longitude:</strong> {}</p>
          <p><strong>Latitude:</strong> {}</p>
      </div>
    );
  }
  
  componentDidMount() {
    api.getStreetArt("streetArtId")
    .then(streetArt => this.setState({streetArt: streetArt}))
    .catch(err => console.log(err))
  }
}