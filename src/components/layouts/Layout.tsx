import {Box} from "@chakra-ui/react";
import {AppRow} from "components/elements";
import Navigation from "components/layouts/Navigation";
import PersonalCard from "components/layouts/PersonalCard";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <AppRow
      maxW="1200px"
      marginInline="auto"
      alignItems="stretch"
      gap={6}
      my="60px"
    >
      <PersonalCard />
      <Box pos="relative" width="75%" minW="75%">
        <Navigation />
        <Box minHeight={"80vh"}>{children}</Box>
      </Box>
    </AppRow>
  );
};

export default Layout;
