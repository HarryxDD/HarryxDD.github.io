import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import AppImage from "components/elements/AppImage";
import ArticleTitle from "components/shared/ArticleTitle";
import { CATEGORIES, PROJECTS } from "constants/portfolio";
import { motion } from "framer-motion";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [currentProjects, setCurrentProjects] = useState(PROJECTS);

  const handleFilterProjects = (cate: string) => {
    if (!cate || cate === "all") {
      setCurrentProjects(PROJECTS);
      return;
    }
    const newProjects = PROJECTS.filter((project) => project.cate === cate);
    setCurrentProjects(newProjects);
    return;
  };

  return (
    <Box>
      <ArticleTitle>Portfolio</ArticleTitle>
      <Tabs variant="unstyled" my={7}>
        <TabList gap={10} color="whiteAlpha.800">
          {CATEGORIES.map((cate) => (
            <Tab
              key={cate.id}
              fontSize="15px"
              _selected={{ color: "harry.200" }}
              padding="0"
              onClick={() => handleFilterProjects(cate.value)}
            >
              {cate.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {CATEGORIES.map((cate) => (
            <TabPanel key={cate.id} padding="0" mt={5}>
              <motion.div layout>
                <Grid templateColumns="repeat(3, 1fr)" gap="32px">
                  {currentProjects.map((proj) => (
                    <GridItem key={proj.id} colSpan={1}>
                      <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Box
                          role="group"
                          pos="relative"
                          width="100%"
                          borderRadius="16px"
                          overflow="hidden"
                          height="200px"
                          mb="15px"
                        >
                          <AppImage
                            height="250px"
                            objectFit="cover"
                            transition="all 0.3s ease"
                            url={proj.img}
                            _groupHover={{ transform: "scale(1.1)" }}
                          />
                        </Box>
                        <Text fontSize="15px" fontWeight="500">
                          {proj.name}
                        </Text>
                        <Text fontSize="14px" color="whiteAlpha.800">
                          {proj.cateName}
                        </Text>
                      </motion.div>
                    </GridItem>
                  ))}
                </Grid>
              </motion.div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PortfolioPage;
