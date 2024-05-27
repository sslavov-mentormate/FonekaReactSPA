import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box mt={4} mb={4} textAlign="center">
        <Typography variant="h2" gutterBottom>
          Welcome to the landing page
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box mt={4} mb={4}>
        <Typography variant="h3" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nulla ac eros ut nulla auctor vehicula. Fusce aliquet,
          tellus at scelerisque pretium, arcu libero sollicitudin libero, ac
          pharetra ligula nunc at dui. Nam elementum tincidunt dolor, sit amet
          feugiat purus vestibulum non.
        </Typography>
        <Typography variant="body1" paragraph>
          Aliquam erat volutpat. Morbi tincidunt, urna in pellentesque
          consectetur, purus odio convallis tellus, et faucibus quam sapien eget
          arcu. Fusce bibendum ultricies ex nec congue. Nulla facilisi. Donec ac
          turpis id neque suscipit gravida at vel turpis. Pellentesque finibus
          semper lorem, id dignissim libero.
        </Typography>
        <Typography variant="body1" paragraph>
          Integer ullamcorper fermentum mauris, a tincidunt lorem lobortis at.
          Praesent vitae ante fringilla, lobortis dui eget, commodo odio. Mauris
          auctor dui quis magna sagittis vestibulum. Sed tincidunt leo nec
          sapien vestibulum, eget hendrerit orci vehicula. Aliquam erat
          volutpat.
        </Typography>
      </Box>

      <Box mt={4} mb={4} textAlign="center">
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Contact Support
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
