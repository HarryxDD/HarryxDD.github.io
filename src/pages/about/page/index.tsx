import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { AppTitle } from "components/elements/AppTitle";
import ArticleTitle from "components/shared/ArticleTitle";
import { WHAT_I_DO } from "constants/about";
import React from "react";
import { colors } from "theme";

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
      <Button fontSize="14px" height='40px' padding={5}>Download resume</Button>
      <AppTitle mt={12} marginBottom={5}>What I Do</AppTitle>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {WHAT_I_DO.map((service) => (
          <GridItem
            colSpan={1}
            pos="relative"
            key={service.id}
            p="30px"
            background="linear-gradient( to bottom right, hsla(46, 65%, 44%, 0.58) 0%, hsla(0, 0%, 25%, 0) 50% );"
            borderRadius="14px"
            boxShadow="0 16px 30px hsla(0, 0%, 0%, 0.125);"
            zIndex={1}
            _before={{
              zIndex: "-1",
              borderRadius: "inherit",
              pos: "absolute",
              content: '""',
              inset: "0.07em",
              background:
                "linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100% ), hsl(240, 2%, 13%);",
            }}
          >
            <Text fontSize="18px" fontWeight="600" mb="10px">
              {service.title}
            </Text>
            <Text
              fontWeight="400"
              fontSize="15px"
              color="whiteAlpha.800"
              lineHeight="25px"
            >
              {service.desc}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutPage;
