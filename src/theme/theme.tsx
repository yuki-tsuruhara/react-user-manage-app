import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "gray.800",
        backgroundColor: "gray.100",
      },
    },
  },
});

export default theme;
