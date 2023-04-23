import { AspectRatio, Box, Button, Text } from "@chakra-ui/react";
import {AppLink} from "components/elements/AppLink";
import ArticleTitle from "components/shared/ArticleTitle";
import React from "react";

const ContactPage = () => {
  return (
    <Box>
      <ArticleTitle>Contact</ArticleTitle>
      <AspectRatio ratio={16 / 9} mt={10} borderRadius={14} overflow="hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490737.0321108876!2d107.74849522464888!3d16.07155680624933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2s!4v1682252185665!5m2!1sen!2s"
          width="600"
          height="450"
          loading="lazy"
          style={{ filter: "grayscale(1) invert(1)" }}
        ></iframe>
      </AspectRatio>
      <Box paddingTop={10} display="flex" justifyContent="flex-end">
        <AppLink href="mailto:harrytruong1772@gmail.com">
          <Button>Send Message</Button>
        </AppLink>
      </Box>
    </Box>
  );
};

export default ContactPage;
