import {
  Box,
  Grid,
  GridItem,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import AppImage from "components/elements/AppImage";
import {AppLink} from "components/elements/AppLink";
import ArticleTitle from "components/shared/ArticleTitle";
import {CATEGORIES, PROJECTS} from "constants/portfolio";
import {motion} from "framer-motion";
import React, {useState} from "react";
import {HiOutlineEye} from "react-icons/hi";
import {colors} from "theme";

const PortfolioPage = () => {
  const [currentProjects, setCurrentProjects] = useState(PROJECTS);
  const [isLargeDesktop] = useMediaQuery(`(min-width: 1200px)`, {
    ssr: false,
  });
  const [isDesktop] = useMediaQuery(`(min-width: 600px)`, {
    ssr: false,
  });

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
                <Grid
                  templateColumns={
                    isLargeDesktop
                      ? "repeat(3, 1fr)"
                      : isDesktop
                      ? "repeat(2, 1fr)"
                      : "repeat(1, 1fr)"
                  }
                  gap="32px"
                >
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
                          <AppLink
                            pos="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%) scale(0.6)"
                            borderRadius="14px"
                            background={colors.mineShaft}
                            padding="14px"
                            cursor="pointer"
                            href={proj.link}
                            target="_blank"
                            zIndex="6"
                            opacity="0"
                            transition="all 0.3s ease"
                            _groupHover={{
                              opacity: "1",
                              transform: "translate(-50%, -50%) scale(1)",
                            }}
                          >
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Icon
                                as={HiOutlineEye}
                                boxSize={5}
                                color="harry.200"
                              />
                            </Box>
                          </AppLink>
                          <AppImage
                            height="200px"
                            objectFit="cover"
                            transition="all 0.3s ease"
                            url={proj.img}
                            zIndex="5"
                            background={colors.black}
                            _groupHover={{
                              transform: "scale(1.1)",
                              opacity: "0.4",
                            }}
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
