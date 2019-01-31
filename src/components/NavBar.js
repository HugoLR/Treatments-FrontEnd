import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
// import ListItemTextStyle from '@material-ui/core/ListItemTextStyle';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {
  constructor() {
    super();
        this.state = {
            open: false
        }
    }

    //Toggle function (open/close Drawer)
    toggleDrawer = () => {
        this.setState({
            open: !this.state.open
        })
    }

  render() {
    const AppBarStyles = {
      flex: 1
    };

    const ListItemTextStyle = {
      width: 200
    };
    return(
        <div>
        <AppBar  position="static">
            <Toolbar>
                <Menu  onClick={this.toggleDrawer} color="inherit" arai-label="Menu"></Menu>
                <Typography variant="title" style={AppBarStyles} color="inherit">
                  Muktek
                </Typography>
                <div className="navbar">
                  <Link to="/"  color="inherit" arai-label="Menu">
                    <Typography variant="title" style={AppBarStyles} color="inherit">
                      Home
                    </Typography>
                  </Link>
                  <Link to="/login"  color="inherit" arai-label="Menu">
                    <Typography variant="title" style={AppBarStyles} color="inherit">
                      LogIn
                    </Typography>
                  </Link>
                </div>
            </Toolbar>
            <Drawer open={this.state.open} onClose={ this.toggleDrawe }>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                <List>
                  <ListItem>
                    <ListItemText style={ListItemTextStyle} primary="Features" />
                  </ListItem>
                  <ListItem button>
                    <Link to="/users">Users</Link>
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <Link to="/treatments">Treatments</Link>
                  </ListItem>
                </List>
              </div>
            </Drawer>
        </AppBar>
        </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
