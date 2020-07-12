import React from 'react';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: props.name || '',
        description: props.description || '',
        levelOfEffort: props.levelOfEffort || 1,
      }
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

  save = (e) => {
    e.preventDefault();
    const { handleSave } = this.props;

    if (handleSave) {
      handleSave(this.state.data);
    }
  }

  render() {
    const { name, description, levelOfEffort } = this.state.data;
    const theme = createMuiTheme();
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      paper: {
        margin: theme.spacing(1),
        width: theme.spacing(32),
      },
      button: {
        marginLeft: 'auto',
        marginTop: theme.spacing(2),
      },
    };

    return (
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h4" style={{ textAlign: 'center' }}>
          Task
        </Typography>
        <form noValidate={true}>
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="name"
                     label="Name"
                     value={name}
                     onChange={(e) => this.handleChange(e, 'name')}
                     autoComplete="name" />
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="description"
                     label="Description"
                     value={description}
                     onChange={(e) => this.handleChange(e, 'description')}
                     autoComplete="description"
                     multiline={true}
                     rows={4} />
          <TextField variant="outlined"
                     margin="normal"
                     required={true}
                     fullWidth={true}
                     id="level-of-effort"
                     label="Level of Effort"
                     value={levelOfEffort}
                     onChange={(e) => this.handleChange(e, 'levelOfEffort')}
                     type="number" />
          <Button variant="contained"
                  margin="normal"
                  style={styles.button}
                  color="primary"
                  fullWidth={true}
                  disableElevation={true}
                  onClick={this.save}
                  startIcon={<i className="material-icons">save</i>}>
            Save
          </Button>
        </form>
      </Container>
    );
  }
}

export default Form;