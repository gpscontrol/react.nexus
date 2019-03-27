import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux'
import DivIcon from './leaflet/DivIcon';

const mapStateToProps = state => ({
  positions: state.positions
});

class MainMap extends Component {
  state = {
    lat: 0,
    lng: 0,
    course:0,
    zoom: 3,

  }
  listData = () => {
    let table = []
    // Outer loop to create parent
    for (let i = 0; i < this.props.positions.length; i++) {
      let children = []
      var imei=this.props.positions[i].id
      var azimuth=this.props.positions[i].course
      var latitude=this.props.positions[i].latitude
      var longitude=this.props.positions[i].longitude
      console.log('Imei',imei)
      console.log('Azimuth',azimuth)

    const coordinates = [latitude, longitude];
      children.push(<Popup>{imei}</Popup>)
    table.push(<Marker position={coordinates}>{children}</Marker>)
    }

    const perc = this.props.perc || 50;
    return (
      table
    );
  }
  render() {
    const position = [this.state.lat, this.state.lng, this.state.course]
    this.listData()
    const markers = this.props.positions.map(position =>
      <DivIcon key={position.id.toString()} position={{ lat: position.latitude, lng: position.longitude,course:position.course }} className="" iconSize={[50, 50]}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 50 50">
 {this.listData()}
        </svg>

      </DivIcon>
    );
        const markers2 = this.props.positions.map(position =>
      <DivIcon key={position.id.toString()} position={{ lat: position.latitude, lng: position.longitude,course:position.course }} className="" iconSize={[50, 50]}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 50 50">
<image x="13" y="13" fill="#fff" href="/images/arrow.svg" />
        </svg>

      </DivIcon>
    );

    return (
      <Map style={{height: this.props.height, width: this.props.width}} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png" />
         {this.listData()}
      </Map>
    )
  }
}

export default connect(mapStateToProps)(MainMap);
