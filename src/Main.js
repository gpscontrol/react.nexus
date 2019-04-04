import React, { Component } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import MainMap from './Map';
import SocketController from './SocketController';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import TopAppBar from './AppBar';
import TrackerList from './TrackersList';

const styles = theme => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column-reverse"
    }
  },
  drawerPaper: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      width: 350
    },
    [theme.breakpoints.down('xs')]: {
      height: 250
    }
  },
  mapContainer: {
    flexGrow: 1
  }
});

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {

  }

  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
          <SocketController />
           <TopAppBar history={this.props.history} />
          <div className={classes.content}>

            <div className={classes.mapContainer}>
              <ContainerDimensions>
                <MainMap/>
              </ContainerDimensions>
            </div>

            <Drawer
              anchor={isWidthUp('sm', this.props.width) ? "right" : "bottom"}
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}>
              <TrackerList />
            </Drawer>
          </div>
        </div>
      );

  }
}

export default withWidth()(withStyles(styles)(MainPage));
