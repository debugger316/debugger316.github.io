import React from 'react';
import { Box, Typography } from '@mui/material';

export const Heading = (props) => {
  const { firstText, secondText, variant, fontWeight, hasSpace, mb } = props;
  return (
    <Box mb={mb || '20px'}>
      <Typography
        color='primary'
        fontWeight={fontWeight || 'bold'}
        variant={variant || 'h3'}
        sx={{
          display: 'inline-block',
        }}
      >
        {firstText}
      </Typography>
      {hasSpace && (
        <Typography
          color='primary'
          fontWeight={fontWeight || 'bold'}
          variant={variant || 'h3'}
          sx={{
            display: 'inline-block',
          }}
        >
          &nbsp;
        </Typography>
      )}
      <Typography
        color='white'
        fontWeight={fontWeight || 'bold'}
        variant={variant || 'h3'}
        sx={{
          display: 'inline-block',
        }}
      >
        {secondText}
      </Typography>
    </Box>
  );
};
