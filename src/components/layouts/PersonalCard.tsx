import {
  Box,
  Center,
  Divider,
  Icon,
  ListItem,
  Text,
  Tooltip,
  UnorderedList
} from "@chakra-ui/react";
import {avatar} from "assets/images";
import {AppCol, AppRow} from "components/elements";
import AppImage from "components/elements/AppImage";
import {AppLink} from "components/elements/AppLink";
import {personalCardIcons, PERSONAL_INFOS} from "constants/personal-card";
import {colors} from "theme";
import React from "react";

const PersonalCard = () => {
  return (
    <AppCol
      p={7}
      pt="60px"
      width="auto"
      overflow="hidden"
      maxHeight="max-content"
      background={colors.shark}
      borderRadius="20px"
      border="1px solid"
      borderColor={colors.mineShaft}
    >
      <AppCol alignItems="center" gap="25px">
        <Box width="150px" height="150px" borderRadius="30px" overflow="hidden">
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
                <AppCol maxWidth="calc(100% - 64px)" width="calc(100% - 64px)">
                  <Text fontSize="xs" color="whiteAlpha.600">
                    {info.label}
                  </Text>
                  <Text fontSize="sm" overflow="hidden" textOverflow="ellipsis">
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
                          {info.value}
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
                <Icon as={icon.name} color="whiteAlpha.700" cursor="pointer" />
              </AppLink>
            </ListItem>
          ))}
        </UnorderedList>
      </Center>
    </AppCol>
  );
};

export default PersonalCard;
