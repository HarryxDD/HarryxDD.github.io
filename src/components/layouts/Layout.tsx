import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Navigation from "components/layouts/Navigation";
import PersonalCard from "components/layouts/PersonalCard";
import { QUERY_LG_DESKTOP, QUERY_MOBILE } from "constants/app";
import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import { colors } from "theme";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();
  const [isLargeDesktop] = useMediaQuery(`(min-width: ${QUERY_LG_DESKTOP})`, {
    ssr: false,
  });
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
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
    <Flex
      maxW="1200px"
      marginInline="auto"
      alignItems="stretch"
      gap={6}
      my={isLargeDesktop ? "60px" : "20px"}
      pos="relative"
      width={!isDesktop ? "90%" : !isLargeDesktop && "75%"}
      flexDirection={isLargeDesktop ? "row" : "column"}
    >
      <PersonalCard />
      <Box
        pos="relative"
        width={isLargeDesktop ? "75%" : "100%"}
        minW={isLargeDesktop ? "75%" : "100%"}
      >
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
    </Flex>
  );
};

export default Layout;
