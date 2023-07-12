import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "red",
    200: "orange",
    300: "yellow",
    400: "green",
    500: "blue",
    600: "purple",
    700: "gray",
    800: "black",
    900: "white",
  },
  secondary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#61DBFB",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
