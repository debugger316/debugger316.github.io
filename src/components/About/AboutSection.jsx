import React, { useRef } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Slide,
} from '@mui/material';
import { Image } from 'mui-image';
import { myself } from '../../assets';

export const AboutSection = (props) => {
  const containerRef = useRef(null);

  return (
    <Card
      elevation={0}
      sx={{
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} md={4}>
          <Image
            src={myself}
            showLoading={<CircularProgress color='whites' />}
            shift='right'
            sx={{
              borderRadius: 16,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Slide
            direction='left'
            in={true}
            container={containerRef.current}
            timeout={3000}
            unmountOnExit
          >
            <CardContent
              sx={{
                width: {
                  md: '75%',
                },
                margin: {
                  md: 'auto',
                },
                padding: {
                  xs: '0',
                },
              }}
            >
              <Typography
                color='white'
                fontWeight='bold'
                variant='h2'
                sx={{
                  display: 'inline-block',
                }}
              >
                Celeste&nbsp;
              </Typography>
              <Typography
                color='primary'
                fontWeight='bold'
                variant='h2'
                sx={{
                  display: 'inline-block',
                }}
              >
                Zhao
              </Typography>
              <Typography color='white' fontWeight={300} variant='h5'>
                Hi I am Celeste, I was born in a beautiful coastal city in
                China, grew up in a snowy town outside of Vancouver in Canada,
                currently studying the intersection between human needs and
                technologies. I have a passion for tech and law, healthy dishes,
                and outdoor activities! <br /> <br />I love travelling and have
                been very lucky to travel to around 10 different countries
                before the pandemic. Here are some pictures of the spectacular
                places I have visited.
              </Typography>
            </CardContent>
          </Slide>
        </Grid>
      </Grid>
    </Card>
  );
};
