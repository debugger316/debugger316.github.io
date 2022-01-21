import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Image } from 'mui-image';
import { websiteTheme } from '../../styles/websiteTheme';

export const ShowcaseCard = (props) => {
  const isXS = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { image, company, title, body, to } = props;
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        border: '4px solid',
        borderColor: 'transparent',
        borderRadius: 8,
        transition: '0.4s',
        '&:hover': {
          borderColor: websiteTheme.palette.primary.main,
        },
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={to}
        sx={{
          borderRadius: 8,
          pt: '10px',
          pb: '10px',
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              bgcolor: 'transparent',
            }}
          >
            <Image
              src={image}
              sx={{
                maxWidth: '200px',
                minHeight: '200px',
                margin: 'auto',
                border: '2px transparent',
                borderRadius: 8,
              }}
            />
          </Grid>
          {!isXS && (
            <Grid item xs={8}>
              <CardContent>
                <Typography color='gray.main' variant='body1' fontWeight={600}>
                  {company}
                </Typography>
                <Typography color='primary' fontWeight='bold' variant='h4'>
                  {title}
                </Typography>
                <Typography
                  color='whites.main'
                  fontWeight={300}
                  paragraph={true}
                  variant='h6'
                >
                  {body}
                </Typography>
              </CardContent>
            </Grid>
          )}
        </Grid>
      </CardActionArea>
    </Card>
  );
};
