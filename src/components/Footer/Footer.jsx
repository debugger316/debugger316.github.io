import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Footer = (props) => {
  const { description, title } = props;

  return (
    <Container maxWidth="xl">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {description}
      </Typography>
    </Container>
  );
};
