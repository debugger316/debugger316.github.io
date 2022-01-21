import React from 'react';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from '@mui/material';

const ImgList = (props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const { pics } = props;

  return (
    <ImageList
      cols={isMobile ? 1 : 2}
      sx={{
        transform: 'translateZ(0)',
        mb: '0',
        pb: 5,
      }}
    >
      {pics.map((item) => {
        return (
          <ImageListItem key={item.image}>
            <img src={item.image} loading='lazy' alt={item.name} />
            && (
            <ImageListItemBar
              title={<Typography variant='h5'>{item.name}</Typography>}
              position='top'
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
            />
            )
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default ImgList;
