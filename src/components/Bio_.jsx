import React from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  Stack,
  flexbox,
  Spacer,
} from "@chakra-ui/react";
import Welcome_ from "./Welcome_";
import Grid_ from "./Grid_";

const Bio_ = () => {
  return (
    <Flex
      // main page background
      bg="darkgrey"
      _dark={{ bg: "#3e3e3e" }}
      p="3rem"
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        rounded="xl"
        p="2rem"
        maxW="7xl"
        mx="auto"
        px={{ base: 4, lg: 8 }}
        spacing={{ base: 10, md: 0 }}
        display={{ md: "grid" }}
        gridRowGap={{ md: "1rem" }}
      >
        {/* featured work big at top of display */}
        <Welcome_ />
        <Grid_ />
      </Box>
    </Flex>
  );
};
export default Bio_;
