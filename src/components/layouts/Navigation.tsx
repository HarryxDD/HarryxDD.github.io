import {Box, Container, Flex, Icon, useMediaQuery} from "@chakra-ui/react";
import {AppRow, BasicRoute} from "components/elements";
import {AppLink} from "components/elements/AppLink";
import {MobileNavigation} from "components/layouts/MobileNavigation";
import {QUERY_LG_DESKTOP, QUERY_MOBILE} from "constants/app";
import React, {useEffect, useRef} from "react";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {MdOutlineClose} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";
import {RootState} from "redux/root-reducer";
import {AppDispatch} from "redux/root-store";
import {showMobileMenu} from "redux/ui/slice";
import {routes} from "routes";
import {colors} from "theme";

export const renderMenuItems = (
  item: BasicRoute,
  parentPath = "",
  isMobile = false,
  isShowIcon = false,
  cb: any = undefined
): any => {
  if (item.routes) {
    if (item.label) {
      return renderParentMenuItem(item, item.path, isMobile, isShowIcon, cb);
    }

    return item.routes.map((route) => {
      return renderMenuItems(route, parentPath, isMobile, isShowIcon, cb);
    });
  }
  if (item.label) {
    const fullPath =
      parentPath && parentPath !== "/"
        ? `${parentPath}${item.path}`
        : item.path;
    return (
      <SingleMenuItem
        key={fullPath}
        item={item}
        parentPath={parentPath}
        isMobile={isMobile}
        isShowIcon={isShowIcon}
        cb={cb}
      />
    );
  }
  return null;
};

const renderParentMenuItem = (
  item: BasicRoute,
  parentPath = "",
  isMobile = false,
  isShowIcon = false,
  cb: any = undefined
) => {
  return (
    <Box key={`parent-menu-${item.path}`} _hover={{ cursor: "pointer" }}>
      <AppRow px={5} alignItems="flex-end">
        <AppLink _hover={{ color: "harry.900" }}>{item.label}</AppLink>
      </AppRow>
    </Box>
  );
};

const SingleMenuItem = ({
  item,
  parentPath = "",
  isMobile = false,
  isShowIcon = false,
  cb = undefined,
}: {
  item: BasicRoute;
  parentPath: string;
  isMobile: boolean;
  isShowIcon: boolean;
  cb: any;
}) => {
  const { pathname } = useLocation();

  const fullPath =
    parentPath && parentPath !== "/" ? `${parentPath}${item.path}` : item.path;
  const isActive = pathname.includes(fullPath);

  if (fullPath !== item.path) {
    return (
      <Box
        key={`menu-${fullPath}`}
        fontWeight="bold"
        my={2}
        _hover={{ cursor: "pointer" }}
      >
        <AppLink as={Link} _hover={{ color: "harry.700" }}>
          {item.label}
        </AppLink>
      </Box>
    );
  }

  if (isMobile) {
    return (
      <Box
        key={`menu-${fullPath}`}
        fontWeight="bold"
        _hover={{ cursor: "pointer" }}
      >
        <AppRow alignItems="flex-end" my={5}>
          <AppLink
            onClick={() => cb && cb()}
            as={Link}
            to={fullPath}
            fontSize="xl"
            _focus={{ boxShadow: "none" }}
            _hover={{ color: isActive ? undefined : "harry.700" }}
            zIndex={2}
          >
            <Flex>
              {isShowIcon ? (
                <Icon as={item.icon} boxSize={8} alignItems="center" mx={6} />
              ) : undefined}
              {item.label}
            </Flex>
          </AppLink>
        </AppRow>
      </Box>
    );
  }

  return (
    <Box
      key={`menu-${fullPath}`}
      fontWeight="500"
      _hover={{ cursor: "pointer" }}
    >
      <AppRow px={5} alignItems="flex-end">
        <AppLink
          as={Link}
          _focus={{ boxShadow: "none" }}
          to={fullPath}
          color={isActive ? "harry.200" : "whiteAlpha.800"}
          _hover={{ color: !isActive ? "whiteAlpha.400" : "harry.700" }}
          zIndex={2}
          fontSize="sm"
          letterSpacing="1px"
        >
          {item.label}
        </AppLink>
      </AppRow>
    </Box>
  );
};

const Navigation = () => {
  const inputRef = useRef<any>(null);
  const dispatch: AppDispatch = useDispatch();
  const isShowSideBar =
    useSelector((state: RootState) => state.ui.menu.isShowMobileMenu) || false;
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isDesktop] = useMediaQuery(`(min-width: ${QUERY_MOBILE})`, {
    ssr: false,
  });
  const [isLargeDesktop] = useMediaQuery(`(min-width: ${QUERY_LG_DESKTOP})`, {
    ssr: false,
  });
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("keydown", handleSearchKey, true);
  }, []);

  const handleSearchKey = (e: KeyboardEvent) => {
    if (e.key === "/") {
      e.preventDefault();
      e.stopPropagation();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
  }, []);

  return (
    <Box
      pos="absolute"
      right={0}
      left="auto"
      top={0}
      bg={!isAtTop || isShowSideBar ? "white" : "transparent"}
      zIndex={999}
      sx={{ transition: "all .3s ease-in" }}
      borderBottom={!isAtTop || isShowSideBar ? "2px" : "0"}
      borderStyle="solid"
      background={colors.shark2}
      borderRadius="0 20px 0 20px"
      border="1px solid"
      borderColor={colors.mineShaft}
    >
      <Container maxW="container" px="2rem">
        <Flex py={6} alignItems="center">
          <AppRow>
            <AppLink
              as={Link}
              to="/"
              _hover={{ textDecoration: "none" }}
            ></AppLink>
          </AppRow>
          {!isLargeDesktop && <MobileNavigation />}
          {isLargeDesktop && (
            <AppRow
              alignItems="center"
              color={isHomePage && isAtTop ? "white" : "black"}
            >
              {routes.map((item) => {
                return renderMenuItems(item);
              })}
            </AppRow>
          )}
          {!isLargeDesktop && (
            <Icon
              as={!isShowSideBar ? HiOutlineMenuAlt3 : MdOutlineClose}
              boxSize={"2.3rem"}
              onClick={() => dispatch(showMobileMenu({ value: true }))}
              _hover={{ cursor: "pointer" }}
              color={
                isHomePage && isAtTop && !isShowSideBar ? "white" : "black"
              }
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
