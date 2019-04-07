import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Dropzone from 'react-dropzone';
import Room from '@material-ui/icons/Room';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div>
    <Room className="icon" /> {text}
  </div>
);
AnyReactComponent.propTypes = {
  text: PropTypes.any,
};

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Album extends React.PureComponent {
  static defaultProps = {
    center: {
      lat: 59.3948671,
      lng: 24.6592121,
    },
    zoom: 11,
    text: 'Shoot here',
  };

  handleSubmit() {
    console.log('functioncall');
  }

  uploadFiles(files) {
    console.log(files);
  }

  componentDidMount() {}

  mapOnClick(obj) {
    console.log(obj.lat, obj.lng);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              HITMAN APP
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  onClick={this.mapOnClick}
                  bootstrapURLKeys={{
                    key: 'AIzaSyCpyqha3WkhsC9gXKItadLBJXKsTrTW33U',
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={this.props.center.lat}
                    lng={this.props.center.lng}
                    text="Shoot me"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <div className={classes.heroButtons}>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Dropzone
                    onDrop={acceptedFiles => this.uploadFiles(acceptedFiles)}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <Button variant="contained" color="primary">
                            <CameraIcon className={classes.icon} />
                          </Button>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    ORDER A HITMAN
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  center: PropTypes.any,
  zoom: PropTypes.any,
};

export default withStyles(styles)(Album);
