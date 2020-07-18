import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuAnchor: null,
    };
  }

  openUserMenu = (e) => {
    this.setState({ userMenuAnchor: e.currentTarget });
  }

  closeUserMenu = () => {
    this.setState({ userMenuAnchor: null });
  }

  render() {
    const { userMenuAnchor } = this.state;

    const theme = createMuiTheme();
    const styles = {
      rightButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(-2),
      },
      menuItemLink: {
        textDecoration: 'none',
        textDecorationColor: 'black',
      }
    }

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <i className="material-icons">menu</i>
          </IconButton>
          <Typography variant="h6">
            Chore Bot
          </Typography>
          <section style={styles.rightButton}>
            <IconButton aria-label="Account of current user"
                        aria-haspopup="true"
                        aria-controls="user-menu"
                        color="inherit"
                        onClick={this.openUserMenu}
                        style={{ flex: 1, marginRight: theme.spacing(2) }}>
              <i className="material-icons">account_circle</i>
            </IconButton>
          </section>
          <Menu open={Boolean(userMenuAnchor)}
                anchorEl={userMenuAnchor}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                id="user-menu"
                onClose={this.closeUserMenu}
                keepMounted={true}>
            <Link to="/user/sign_in" style={styles.menuItemLink}>
              <MenuItem onClick={this.closeUserMenu}>Sign In</MenuItem>
            </Link>
            <Link to="/user/sign_up" style={styles.menuItemLink}>
              <MenuItem onClick={this.closeUserMenu}>Sign Up</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopMenu;