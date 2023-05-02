import {
  Box,
  Center,
  Grid,
  GridItem,
  Icon,
  ListItem,
  OrderedList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { AppRow } from "components/elements";
import { AppTitle } from "components/elements/AppTitle";
import ArticleTitle from "components/shared/ArticleTitle";
import { QUERY_LG_DESKTOP } from "constants/app";
import { EDUCATION, EXPERIENCE, HONORS, SKILLS } from "constants/resume";
import React from "react";
import { IconType } from "react-icons";
import { HiOutlineBookOpen, HiOutlineBriefcase } from "react-icons/hi";
import { colors } from "theme";

interface ResumeListProps {
  icon?: IconType;
  title?: string;
  resumeList: { id: number; title: string; time: string; desc: string }[];
}

const ResumeListItem = ({ icon, title, resumeList }: ResumeListProps) => {
  return (
    <Box my={9}>
      {icon && title && (
        <AppRow alignItems="center" gap="16px" marginBottom="25px">
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
              as={icon}
              borderRadius="inherit"
            />
          </Center>
          <AppTitle>{title}</AppTitle>
        </AppRow>
      )}

      <OrderedList ml="65px" listStyleType="none">
        {resumeList.map((item) => (
          <ListItem
            key={item.id}
            fontSize="15px"
            pos="relative"
            _notLast={{
              marginBottom: "20px",
              _before: {
                content: '""',
                pos: "absolute",
                top: !title && !icon ? "5px" : "-25px",
                left: "-42px",
                width: "1px",
                height:
                  !title && !icon ? "calc(100% + 30px)" : "calc(100% + 50px)",
                background: colors.mineShaft,
              },
            }}
            _after={{
              content: '""',
              pos: "absolute",
              top: "5px",
              left: "-45px",
              width: "8px",
              height: "8px",
              background: "harry.200",
              borderRadius: "50%",
              boxShadow: "0 0 0 4px hsl(0, 0%, 22%)",
            }}
          >
            <Text fontWeight="600" lineHeight="1.3" mb="7px">
              {item.title}
            </Text>
            <Text color="harry.200" fontWeight="400" lineHeight="1.6">
              {item.time}
            </Text>
            <Text color="whiteAlpha.800">{item.desc}</Text>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
};

const ResumePage = () => {
  const [isLargeDesktop] = useMediaQuery(`(min-width: ${QUERY_LG_DESKTOP})`, {
    ssr: false,
  });
  return (
    <Box>
      <ArticleTitle>Resume</ArticleTitle>
      <ResumeListItem
        icon={HiOutlineBookOpen}
        title="Education"
        resumeList={EDUCATION}
      />
      <ResumeListItem
        icon={HiOutlineBriefcase}
        title="Experience"
        resumeList={EXPERIENCE}
      />
      <Box>
        <AppTitle mb={5}>Skills</AppTitle>
        <Grid
          templateColumns={isLargeDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
          gap={6}
        >
          {SKILLS.map((skill) => (
            <GridItem
              colSpan={1}
              pos="relative"
              key={skill.id}
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
                {skill.title}
              </Text>
              <Text
                fontWeight="400"
                fontSize="15px"
                color="whiteAlpha.800"
                lineHeight="25px"
              >
                {skill.desc}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mt={12}>
        <AppTitle mb={5}>Honors & Awards</AppTitle>
      </Box>
      <ResumeListItem resumeList={HONORS} />
    </Box>
  );
};

export default ResumePage;
