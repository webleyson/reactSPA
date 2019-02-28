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
          title={'Without Servers Cardiff'}
          name={"Without Servers, , Wellington House, Wellington Street, Cardiff CF11 9BE  "}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
             <div style={{maxWidth:'40vw'}}>
            <h4>Without Servers</h4>
            <p>1st Floor,<br />Wellington House,<br /> Wellington Street,<br /> Cardiff <br />CF11 9BE <br />Email: info@withoutservers.com  <br />Telephone : +44330 1331225</p>
          </div>
        </InfoWindow>
       </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRJEVVjgB1zpAl1027LDXxueBsvW92A2k'
})(MapContainer);
