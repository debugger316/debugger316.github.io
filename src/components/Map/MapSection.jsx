import React from 'react';
import { Map } from './Map';
import { Box } from '@mui/material';

export const MapSection = (props) => {
  return (
    <Box
      sx={{
        pt: '2rem',
        pb: '2rem',
      }}
    >
      <Map />
    </Box>
  );
};
