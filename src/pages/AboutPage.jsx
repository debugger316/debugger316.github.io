import React from 'react';
import { AboutSection } from '../components/About/AboutSection';
import { MapSection } from '../components/Map/MapSection';

export const AboutPage = () => {
  return (
    <>
      <AboutSection maxWidth='xl' />
      <MapSection maxWidth='xl' />
    </>
  );
};
