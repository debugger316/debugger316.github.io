import React from 'react';
import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import LazyLoad from 'react-lazyload';
import {
  UserSegments,
  UserSegmentDescription0,
  UserSegmentDescription1,
  UserSegmentDescription2,
} from '../../assets';
import { Heading } from '../Heading/Heading';

export const ArtsCenter = () => {
  return (
    <Box>
      <Heading
        firstText='How Did I'
        secondText='Approach This Project?'
        variant='h4'
        fontWeight={600}
        hasSpace
        mb='10px'
      />
      <Typography variant='h6' color='whites.main'>
        At the first stage of the project, I analyzed transcripted interviews of
        art center clients/customers (e.g. artists and art students), as well as
        volunteers and leaders of the Santa Cruz Mountains Art Center. The stage
        is composed of three rounds of interview annotations to go beneath the
        surface in observations and to articulate clear point-of-views on user
        needs.
      </Typography>
      <br />
      <Typography variant='h6' color='whites.main'>
        When I was first coding the interview, my goal was to gather enough
        information that allowed me to create an empathy map. For example, I
        highlight people’s words and actions, as well as their response to the
        environment in terms of the things they were hearing and seeing.
        Additionally, it is also important to observe users’ tensions,
        contradictions, and surprises. By arranging my codes to SD for saying
        and doing, SH for seeing and hearing, TH for thinking and feelings, and
        lastly, TCH for tensions, contradictions and surprises. This technique
        helps me with automatically grouping my codes together based on the
        categories of an empathy map and gains me a clear perspective of who my
        users are and the emotions they are expressing.
      </Typography>
      <br />
      <Typography variant='h6' color='whites.main'>
        Now that I gained some sense of initial observations on what my user
        group is, the next round of annotations would center on characterizing
        our users which will ultimately be used to create personas. Another way
        to think about this step is to build on annotations from my first
        observations, but my codes should now be worded to correspond to themes
        or subthemes that answer that helps me to characterizes my users and
        provides me sufficient insights on who my users are and how might I
        understand their life and story in relation to art?. The common
        categories are their motivations, their passion, their feelings, their
        life experiences, and their environment.{' '}
      </Typography>
      <br />
      <Typography gutterBottom variant='h6' color='whites.main'>
        The final round of annotations centers on thinking about user needs and
        goals at the end, which will ultimately be used to articulate problem
        statements using the jobs-to-be-done framework. During this process, I
        carefully review my annotations from my previous two rounds and dig into
        what users wish to be done, and what are their challenges. I also make
        sure my codes are now worded to correspond to themes or subthemes that
        help me to draw the relationship between their goals and the barriers
        that are holding them back.
      </Typography>

      <LazyLoad>
        <Image src={UserSegments} distance={300} shift='left' />
      </LazyLoad>
      <LazyLoad>
        <Image
          src={UserSegmentDescription0}
          distance={300}
          shift='right'
          showLoading
        />
      </LazyLoad>
      <LazyLoad>
        <Image
          src={UserSegmentDescription1}
          distance={300}
          shift='left'
          showLoading
        />
      </LazyLoad>
      <LazyLoad>
        <Image
          src={UserSegmentDescription2}
          distance={300}
          shift='right'
          showLoading
        />
      </LazyLoad>
    </Box>
  );
};
