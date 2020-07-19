import React from 'react';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  return (
    <Container style={{ display: 'flex' }} component="main" maxWidth="xs">
      <CircularProgress style={{ marginRight: 'auto', marginLeft: 'auto' }} />
    </Container>
  )
};

export default Loading;