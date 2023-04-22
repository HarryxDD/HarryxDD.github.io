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
import { navigationIcons } from "constants/navigation";
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
  const isShow =
    useSelector((state: RootState) => state.ui.menu.isShowMobileMenu) || false;
  const dispatch: AppDispatch = useDispatch();
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const history = useHistory();
  const closeDrawer = () => {
    dispatch(showMobileMenu({ value: false }));
  };

  return (
    <Drawer
      placement="right"
      isOpen={isShow}
      onClose={closeDrawer}
      size={isDesktop ? "sm" : "full"}
    >
      <DrawerContent
        minH="calc(100vh - 80px)"
        mt="80px"
        borderTop={isDesktop ? "2px" : "0"}
        borderStyle="solid"
        borderColor="rgb(227, 227, 227)"
      >
        <DrawerBody mt={7}>
          {routes.map((item) => {
            return renderMenuItems(item, "", true, true, closeDrawer);
          })}
          <Divider />
        </DrawerBody>
        <DrawerFooter
          borderTop={isDesktop ? "2px" : "0"}
          borderStyle="solid"
          borderColor="rgb(227, 227, 227)"
          alignItems="center"
          justifyContent="center"
        >
          {navigationIcons.map((item) => (
            <Icon
              key={item.label}
              as={item.icon}
              boxSize={7}
              mx={3}
              color="rgb(138, 147, 155)"
            />
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});
