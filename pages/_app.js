// pages/_app.js
import {
  Box,
  ChakraProvider,
  extendTheme,
  // theme,
  useColorMode,
  // theme,
  useColorModeValue,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// import {  } from "@chakra-ui/";

import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  const newTheme = extendTheme({
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("gray.100", "gray.800")(props),
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={newTheme}>
      {/* <Box h={"100vh"} bg={useColorModeValue("white", "black")}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* </Box> */}
    </ChakraProvider>
  );
}

export default MyApp;
