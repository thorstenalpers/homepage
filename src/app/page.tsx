import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle } from '@mui/material';

export default function HomePage() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
          <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
            <AlertTitle>Hello 👋</AlertTitle>
            This app uses the Next.js App Router and Material UI v5.
          </Alert>
          <Typography variant="body1" gutterBottom>
            Home
          </Typography>
        </div>
      </Box>
    </Container>
  );
}
