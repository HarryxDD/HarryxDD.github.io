import {Box} from "@chakra-ui/react";
import Navigation from "components/layouts/Navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      <Box minHeight={"80vh"}>{children}</Box>
    </div>
  );
};

export default Layout;
