import React from "react";
import { useMediaQuery } from "@mui/material";
import ReactGoogleSlides from "react-google-slides";
import { Heading } from "../Heading/Heading";

export const GigWellbeing = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Heading
        firstText="A Look Into Gig"
        secondText="Workers' Mental Health"
        variant="h4"
        fontWeight={600}
        hasSpace
        mb="10px"
      />
      <ReactGoogleSlides
        slidesLink="https://docs.google.com/presentation/d/1Onlx7t-uk-XhOHjXKe7EHCZ0Jr0kfEq28rDPMdpJJ0s/edit?usp=sharing"
        width="100%"
        height={isMobile ? "100%" : "640px"}
        showControls
      />
    </>
  );
};
