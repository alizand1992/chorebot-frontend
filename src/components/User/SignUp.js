import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: props.email || '',
        password: props.password || '',
        confirmPassword: props.confirmPassword || '',
        screenName: props.screenName || '',
      },
    };
  }

  handleChange = (e, field) => {
    this.setState({
      data: {
        ...this.state.data,
        [field]: e.target.value,
      },
    });
  }

  render() {
    const { email, password, confirmPassword, screenName } = this.state.data;

    const theme = createMuiTheme();
    const styles = {
      accountCircle: {
        fontSize: '1.2em',
      },
      button: {
        marginLeft: 'auto',
        marginTop: theme.spacing(2),
      },
    };

    return (
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h4" style={{ textAlign: 'center' }}>
          <i className="material-icons" style={styles.accountCircle}>
            account_circle
          </i>
          <br />
          Sign Up
        </Typography>
        <form noValidate={true}>
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="screen-name"
                     label="Screen Name"
                     value={screenName}
                     onChange={(e) => this.handleChange(e, 'screenName')}
                     autoComplete="screen-name" />
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="email"
                     label="Email"
                     type="email"
                     value={email}
                     onChange={(e) => this.handleChange(e, 'email')}
                     autoComplete="email" />
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="password"
                     label="Password"
                     type="password"
                     value={password}
                     onChange={(e) => this.handleChange(e, 'password')}
                     autoComplete="password" />
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="confirm-password"
                     label="Confirm Password"
                     type="password"
                     value={confirmPassword}
                     onChange={(e) => this.handleChange(e, 'confirmPassword')}
                     autoComplete="confirm-password" />
          <Button variant="contained"
                  margin="normal"
                  style={styles.button}
                  color="primary"
                  fullWidth={true}
                  disableElevation={true}
                  onClick={this.save}
                  startIcon={<i className="material-icons">person_add</i>}>
            Sign Up
          </Button>
        </form>
      </Container>
    );
  }
}

export default SignUp;