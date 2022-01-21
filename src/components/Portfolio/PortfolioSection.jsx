import React from 'react';
import { Grid } from '@mui/material';
import { Heading } from '../Heading/Heading';
import { ShowcaseCard } from '../ShowcaseCard/ShowcaseCard';
import { projectsSummary } from './constants';

export const PortfolioSection = (props) => {
  return (
    <>
      <Heading firstText='Port' secondText='folio' />
      <Grid container spacing={4} pb={5}>
        {projectsSummary.map((proj) => {
          const { image, company, title, body, to } = proj;
          return (
            <Grid key={title} item xs={12}>
              <ShowcaseCard
                image={image}
                company={company}
                title={title}
                body={body}
                to={to}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
