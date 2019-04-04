import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateDevices } from './actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WiFiIcon from '@material-ui/icons/Wifi';
import Signal1 from '@material-ui/icons/SignalCellular1Bar';

const mapStateToProps = state => ({
  devices: state.devices,
    positions: state.positions
});

class TrackersList extends Component {
  listData = () => {
    let table = []
      let children = []
    // Outer loop to create parent
    for (let i = 0; i < this.props.positions.length; i++) {
      var imei=this.props.positions[i].id
      var azimuth=this.props.positions[i].course
      var latitude=this.props.positions[i].latitude
      var longitude=this.props.positions[i].longitude
      var speed=this.props.positions[i].speed
      console.log('Imei',imei)
      console.log('Azimuth',azimuth)
      const coordinates = [latitude, longitude];

      table.push(<ListItem key={i} style={{ background: '#2E3B55',color:'#FFFFFF' }}  >                <ListItemIcon>
                  <Signal1 style={{ background: '#2E3B55',color:'#FFFFFF' }} />
                </ListItemIcon><Checkbox  checked={true} style={{ background: '#2E3B55',color:'#FFFFFF' }} /> {imei} </ListItem>)
    }

    const perc = this.props.perc || 50;
    return (
      table
    );
  }

  render() {
    const devices = this.props.devices.map(device =>
      <Fragment key={device.id.toString()}>
        <ListItem button>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
          <ListItemText primary={device.name} secondary={device.uniqueId} />
          <ListItemSecondaryAction>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <li>
          <Divider inset />
        </li>
      </Fragment>
    );

    return (
      <List>
         {this.listData()}
      </List>
    );
  }
}

export default connect(mapStateToProps)(TrackersList);
