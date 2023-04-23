import { Box } from "@chakra-ui/react";
import { AppRow } from "components/elements";
import Navigation from "components/layouts/Navigation";
import PersonalCard from "components/layouts/PersonalCard";
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import { colors } from "theme";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    duration: 0.5,
  };
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

        <Box
          minHeight={"100%"}
          borderRadius="20px"
          backgroundColor={colors.shark}
          padding="30px"
          border="1px solid"
          borderColor={colors.mineShaft}
        >
          <motion.div
            key={pathname}
            transition={pageTransition}
            animate="in"
            initial="initial"
            variants={pageVariants}
          >
            {children}
          </motion.div>
        </Box>
      </Box>
    </AppRow>
  );
};

export default Layout;
