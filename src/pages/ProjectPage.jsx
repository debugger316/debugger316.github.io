import React from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { projectsFull } from '../components/Portfolio/constants';
import { Image } from 'mui-image';
import { Heading } from '../components/Heading/Heading';

export const ProjectPage = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const params = useParams();
  const { project } = params;
  const {
    image,
    company,
    title,
    type,
    description,
    toolkit,
    methodologies,
    Component,
  } = projectsFull[project];

  return (
    <Grid container rowSpacing={4}>
      <Grid
        container
        item
        spacing={4}
        alignItems='center'
        sx={{
          minHeight: {
            md: '650px',
          },
        }}
      >
        <Grid item xs={12} md={5}>
          <Typography
            color='gray.main'
            variant='h6'
            fontWeight={300}
            align={isMobile ? 'center' : 'right'}
          >
            {company}
          </Typography>
          <Typography
            color='primary'
            variant='h4'
            fontWeight='bold'
            align={isMobile ? 'center' : 'right'}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Image
            src={image}
            sx={{
              maxWidth: '300px',
              minHeight: '300px',
              border: '2px transparent',
              borderRadius: 8,
            }}
            wrapperStyle={{
              justifyContent: isMobile ? 'center' : 'left',
            }}
          />
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={12} md={3}>
          <Heading
            firstText='Cat'
            secondText='egory'
            variant='h4'
            fontWeight={600}
            mb='5px'
          />

          <Typography
            color='whites.main'
            variant='body1'
            fontWeight={400}
            sx={{
              mb: '40px',
            }}
          >
            {type}
          </Typography>
          <Heading
            firstText='Tool'
            secondText='kit'
            variant='h4'
            fontWeight={600}
            mb='5px'
          />
          {toolkit.map((tool, idx) => {
            return (
              <Typography
                key={tool}
                color='whites.main'
                variant='body1'
                fontWeight={400}
                sx={{
                  mb: idx === toolkit.length - 1 ? '40px' : 'inherit',
                }}
              >
                {tool}
              </Typography>
            );
          })}
          <Heading
            firstText='Method'
            secondText='ologies'
            variant='h4'
            fontWeight={600}
            mb='5px'
          />
          {methodologies.map((method, idx) => {
            return (
              <Typography
                key={method}
                color='whites.main'
                variant='body1'
                fontWeight={400}
                sx={{
                  mb: idx === methodologies.length - 1 ? '40px' : 'inherit',
                }}
              >
                {method}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={12} md={9}>
          <Heading
            firstText='What is'
            secondText='this project?'
            variant='h4'
            fontWeight={600}
            hasSpace
            mb='10px'
          />
          <Typography color='whites.main' variant='h6' paragraph mb='10px'>
            {description}
          </Typography>
          {Component && <Component />}
        </Grid>
      </Grid>
    </Grid>
  );
};
