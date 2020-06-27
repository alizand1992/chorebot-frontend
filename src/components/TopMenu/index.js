import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

class TopMenu extends React.Component {
  render() {
    const theme = createMuiTheme();
    const styles = {
      rightButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(-2),
      },
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
                        color="inherit"
                        style={{ flex: 1, marginRight: theme.spacing(2) }}>
              <i className="material-icons">account_circle</i>
            </IconButton>
          </section>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopMenu;