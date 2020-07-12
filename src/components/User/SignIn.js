import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: props.email || '',
        password: props.password || '',
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
    const { email, password } = this.state.data;

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
          Sign In
        </Typography>
        <form noValidate={true}>
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
          <Button variant="contained"
                  margin="normal"
                  style={styles.button}
                  color="primary"
                  fullWidth={true}
                  disableElevation={true}
                  onClick={this.save}
                  startIcon={<i className="material-icons">fingerprint</i>}>
            Sign In
          </Button>
        </form>
      </Container>
    );
  }
}

export default SignIn;