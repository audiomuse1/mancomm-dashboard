import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Chart from './chart';
function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Mancomm Dashboard Assignment</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Chart />
      </Container>
    </div>
  );
}

export default App;