import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
      description: props.description || '',
      levelOfEffort: props.levelOfEffort || 1,
    }
  }

  render() {
    const { name, description, levelOfEffort } = this.state;
    const theme = createMuiTheme();

    const styles = {
      root: {
        maxWidth: theme.spacing(48),
        minHeight: theme.spacing(24),
        display: 'flex',
        flexDirection: 'column',
      },
      actions: {
        marginTop: 'auto',
        marginBottom: theme.spacing(0)
      },
    };

    return (
      <Card style={styles.root}>
        <CardContent>
          <Typography component="h6" variant="h6">
            Name: {name}
          </Typography>
          <Typography component="p" variant="body1">
            Description: {description}
          </Typography>
          <Typography component="p" variant="subtitle2">
            Difficulty: {levelOfEffort}
          </Typography>
        </CardContent>
        <CardActions style={styles.actions}>
          <Button color="primary">Delegate</Button>
          <Button color="primary">Mark as Done</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Task;