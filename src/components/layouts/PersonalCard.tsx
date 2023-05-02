import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import { avatar } from "assets/images";
import { AppCol, AppRow } from "components/elements";
import AppImage from "components/elements/AppImage";
import { AppLink } from "components/elements/AppLink";
import { personalCardIcons, PERSONAL_INFOS } from "constants/personal-card";
import { colors } from "theme";
import React from "react";
import { QUERY_LG_DESKTOP, QUERY_MOBILE } from "constants/app";
import { HiChevronDown } from "react-icons/hi";

const PersonalCard = () => {
  const [isLargeDesktop] = useMediaQuery(`(min-width: ${QUERY_LG_DESKTOP})`, {
    ssr: false,
  });
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });

  const renderMobileCard = () => {
    return (
      <AppCol
        top={isLargeDesktop && "60px"}
        pos={isLargeDesktop ? "sticky" : "unset"}
        p={7}
        pt={isLargeDesktop && "60px"}
        width="auto"
        overflow="hidden"
        maxHeight="max-content"
        height="fit-content"
        background={colors.shark}
        borderRadius="20px"
        border="1px solid"
        borderColor={colors.mineShaft}
        paddingBottom={!isLargeDesktop && 0}
      >
        <Accordion allowToggle>
          <AccordionItem border="transparent">
            <Flex
              pos="relative"
              alignItems="center"
              gap="25px"
              flexDirection={isLargeDesktop ? "column" : "row"}
            >
              <Box
                width={isLargeDesktop ? "150px" : "80px"}
                height={isLargeDesktop ? "150px" : "80px"}
                borderRadius={isLargeDesktop ? "30px" : "15px"}
                overflow="hidden"
              >
                <AppImage alt="Truong Ha Vu" url={avatar} />
              </Box>
              <AppCol alignItems="center">
                <Text
                  fontSize={isDesktop ? "26px" : "17px"}
                  fontWeight="500"
                  mb={isLargeDesktop ? "15px" : "5px"}
                >
                  Truong Ha Vu
                </Text>
                <Text
                  fontWeight="500"
                  borderRadius="8px"
                  backgroundColor={colors.shark2}
                  fontSize={isDesktop ? "14px" : "10px"}
                  px={"20px"}
                  pt={"7px"}
                  pb={"5px"}
                >
                  Web developer
                </Text>
              </AppCol>
              <AccordionButton
                pos="absolute"
                top="-30px"
                right="-30px"
                width={isDesktop ? "140px" : "60px"}
                padding={0}
                height="35px"
              >
                <Button
                  borderRadius="0 15px"
                  fontSize={"13px"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="inherit"
                  mt={1}
                >
                  {isDesktop ? <>Show Contact</> : <Icon as={HiChevronDown} />}
                </Button>
              </AccordionButton>
            </Flex>

            <Divider mt={6} />
            <AccordionPanel paddingX={0}>
              <Box width="100%">
                <UnorderedList styleType="none" marginLeft={0}>
                  {PERSONAL_INFOS.map((info) => (
                    <ListItem key={info.label} my="30px">
                      <AppRow gap="16px" alignItems="center">
                        <Center
                          backgroundColor={colors.shark3}
                          width="48px"
                          height="48px"
                          pos="relative"
                          borderRadius={"12px"}
                          background="linear-gradient( to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50% );"
                          zIndex="1"
                          boxShadow="-4px 8px 24px hsla(0, 0%, 0%, 0.125)"
                          _before={{
                            inset: "0.07em",
                            position: "absolute",
                            content: '""',
                            background: `${colors.shark3}`,
                            borderRadius: "inherit",
                            zIndex: "-1",
                          }}
                        >
                          <Icon
                            boxSize={5}
                            color="harry.200"
                            as={info.icon}
                            borderRadius="inherit"
                          />
                        </Center>
                        <AppCol
                          maxWidth="calc(100% - 64px)"
                          width="calc(100% - 64px)"
                        >
                          <Text fontSize="xs" color="whiteAlpha.600">
                            {info.label}
                          </Text>
                          <Text
                            fontSize="sm"
                            overflow="hidden"
                            textOverflow="ellipsis"
                          >
                            {info.label === "EMAIL" ? (
                              <AppLink
                                href="mailto:harrytruong1772@gmail.com"
                                cursor="pointer"
                              >
                                <Tooltip
                                  label={info.value}
                                  background={colors.white}
                                  borderRadius={10}
                                >
                                  <Text
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                  >
                                    {info.value}
                                  </Text>
                                </Tooltip>
                              </AppLink>
                            ) : (
                              <>{info.value}</>
                            )}
                          </Text>
                        </AppCol>
                      </AppRow>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
              <Center mt={2}>
                <UnorderedList
                  width="80%"
                  margin={0}
                  styleType="none"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  {personalCardIcons.map((icon) => (
                    <ListItem key={icon.label}>
                      <AppLink href={icon.link} target="_blank">
                        <Icon
                          as={icon.name}
                          color="whiteAlpha.700"
                          cursor="pointer"
                        />
                      </AppLink>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Center>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AppCol>
    );
  };

  const renderCard = () => {
    return (
      <AppCol
        top="60px"
        pos="sticky"
        p={7}
        pt="60px"
        width="auto"
        overflow="hidden"
        maxHeight="max-content"
        height="fit-content"
        background={colors.shark}
        borderRadius="20px"
        border="1px solid"
        borderColor={colors.mineShaft}
      >
        <AppCol alignItems="center" gap="25px">
          <Box
            width="150px"
            height="150px"
            borderRadius="30px"
            overflow="hidden"
          >
            <AppImage alt="Truong Ha Vu" url={avatar} />
          </Box>
          <AppCol alignItems="center">
            <Text fontSize="26px" fontWeight="500" mb="15px">
              Truong Ha Vu
            </Text>
            <Text
              fontWeight="500"
              borderRadius="8px"
              backgroundColor={colors.shark2}
              fontSize="14px"
              px={"20px"}
              pt={"7px"}
              pb={"5px"}
            >
              Web developer
            </Text>
          </AppCol>
        </AppCol>
        <Divider mt={6} />
        <Box width="100%">
          <UnorderedList styleType="none">
            {PERSONAL_INFOS.map((info) => (
              <ListItem key={info.label} my="30px">
                <AppRow gap="16px" alignItems="center">
                  <Center
                    backgroundColor={colors.shark3}
                    width="48px"
                    height="48px"
                    pos="relative"
                    borderRadius={"12px"}
                    background="linear-gradient( to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50% );"
                    zIndex="1"
                    boxShadow="-4px 8px 24px hsla(0, 0%, 0%, 0.125)"
                    _before={{
                      inset: "0.07em",
                      position: "absolute",
                      content: '""',
                      background: `${colors.shark3}`,
                      borderRadius: "inherit",
                      zIndex: "-1",
                    }}
                  >
                    <Icon
                      boxSize={5}
                      color="harry.200"
                      as={info.icon}
                      borderRadius="inherit"
                    />
                  </Center>
                  <AppCol
                    maxWidth="calc(100% - 64px)"
                    width="calc(100% - 64px)"
                  >
                    <Text fontSize="xs" color="whiteAlpha.600">
                      {info.label}
                    </Text>
                    <Text
                      fontSize="sm"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {info.label === "EMAIL" ? (
                        <AppLink
                          href="mailto:harrytruong1772@gmail.com"
                          cursor="pointer"
                        >
                          <Tooltip
                            label={info.value}
                            background={colors.white}
                            borderRadius={10}
                          >
                            <Text overflow="hidden" textOverflow="ellipsis">
                              {info.value}
                            </Text>
                          </Tooltip>
                        </AppLink>
                      ) : (
                        <>{info.value}</>
                      )}
                    </Text>
                  </AppCol>
                </AppRow>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Center mt={2}>
          <UnorderedList
            width="80%"
            margin={0}
            styleType="none"
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            {personalCardIcons.map((icon) => (
              <ListItem key={icon.label}>
                <AppLink href={icon.link} target="_blank">
                  <Icon
                    as={icon.name}
                    color="whiteAlpha.700"
                    cursor="pointer"
                  />
                </AppLink>
              </ListItem>
            ))}
          </UnorderedList>
        </Center>
      </AppCol>
    );
  };

  return <>{isLargeDesktop ? renderCard() : renderMobileCard()}</>;
};

export default PersonalCard;
