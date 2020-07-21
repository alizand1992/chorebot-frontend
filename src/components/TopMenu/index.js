import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { withStyles } from '@material-ui/core';

class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      userMenuAnchor: null,
    };
  }

  openUserMenu = (e) => {
    this.setState({ userMenuAnchor: e.currentTarget });
  }

  closeUserMenu = () => {
    this.setState({ userMenuAnchor: null });
  }

  handleMenuChange = (e, current) => {
    this.setState({ current })
  }

  render() {
    const { current, userMenuAnchor } = this.state;

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

    const StyledTabs = withStyles({
      indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
          maxWidth: 60,
          width: '100%',
          backgroundColor: '#fff',
        },
      },
    })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

    const StyledTab = withStyles((theme) => ({
      root: {
        textTransform: 'none',
        color: '#fff',
        minWidth: theme.spacing(11),
        maxWidth: theme.spacing(11),
        '&:visited': {
          color: '#fff',
        },
        '&:focus': {
          opacity: 1,
        },
      },
    }))((props) => <Tab disableRipple {...props} />);

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <i className="material-icons">menu</i>
          </IconButton>
          <Typography variant="h6">
            Chore Bot
          </Typography>
          <div style={{ marginLeft: theme.spacing(2) }}>
            <StyledTabs value={current} onChange={this.handleMenuChange} TabIndicatorProps={{ children: <span /> }} aria-label="styled tabs example">
              <StyledTab component={Link} to="/" label="Home" />
              <StyledTab component={Link} to="/" label="Household" />
              <StyledTab component={Link} to="/" label="Tasks" />
            </StyledTabs>
          </div>
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