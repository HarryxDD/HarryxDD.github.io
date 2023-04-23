import { Box, Text } from "@chakra-ui/react";
import ArticleTitle from "components/shared/ArticleTitle";
import React from "react";

const AboutPage = () => {
  return (
    <Box>
      <ArticleTitle>About Me</ArticleTitle>
      <Text my={9} fontSize="15px" color="whiteAlpha.800" lineHeight="25px">
        I am a studious and team player who have a strong passion with a
        demonstrated history of working in the computer software industry.
        <br />
        <br />
        Speaking from my humble experience, I would consider myself a lifelong
        learner who always seeks methods to achieve my goals. With the ability
        to work in a difficult setting, I have the confidence to take on
        difficult tasks and am willing to correct my mistakes.
      </Text>
    </Box>
  );
};

export default AboutPage;
