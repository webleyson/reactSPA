import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
	state = {
    showingInfoWindow: true,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat:  51.480793,
         lng:  -3.192828
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Without Servers <br /> Windsor House'}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
        </InfoWindow>
       </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRJEVVjgB1zpAl1027LDXxueBsvW92A2k'
})(MapContainer);
