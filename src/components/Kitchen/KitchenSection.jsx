import React from 'react';
import { Heading } from '../Heading/Heading';
import ImgList from '../ImgList/ImgList';
import { food } from '../ImgList/constants';
import { Typography } from '@mui/material';

export const KitchenSection = (props) => {
  return (
    <>
      <Heading firstText='Kit' secondText='chen' />
      <Typography variant='h5' color='whites.main'>
        Hi! Welcome to my Kitchen where I keep pictures of all the differet
        kinds of food I've cooked or baked. I spend a lot of time in my kitchen
        trying different recipes from all different cultures so there's a lot of
        variety here!
      </Typography>
      <ImgList pics={food} />
    </>
  );
};
