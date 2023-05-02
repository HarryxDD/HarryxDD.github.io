import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Icon,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { AppCol, AppRow } from "components/elements";
import { renderMenuItems } from "components/layouts/Navigation";
import { QUERY_MOBILE } from "constants/app";
import React, { memo } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "redux/root-reducer";
import { AppDispatch } from "redux/root-store";
import { showMobileMenu } from "redux/ui/slice";
import { routes } from "routes";

export const MobileNavigation = memo(() => {
  const isShow = true;
  const dispatch: AppDispatch = useDispatch();
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const history = useHistory();
  const closeDrawer = () => {
    dispatch(showMobileMenu({ value: false }));
  };

  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      width="100%"
      background="hsla(240, 1%, 17%, 0.75)"
      backdropFilter="blur(10px)"
      height="55px"
      border="1px solid hsl(0, 0%, 22%)"
      borderRadius="12px 12px 0 0"
      boxShadow="0 16px 30px hsla(0, 0%, 0%, 0.25)"
      zIndex="5"
    >
      <AppRow width="100%" height="inherit" alignItems="center" justifyContent="center">
        {routes.map((item) => {
          return renderMenuItems(item);
        })}
      </AppRow>
    </Box>
  );
});
