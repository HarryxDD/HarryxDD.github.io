import React from "react";
import "App.css";
import { AppRouter } from "components/elements/AppRouter";
import config from 'config/app-config';
import {routes} from 'routes';
import {useColorMode} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log(11, colorMode)
  return (
    <AppRouter
      basename={config.routeBaseName}
      routes={routes}
      defaultRedirect="/"
    />
  );
}

export default App;
