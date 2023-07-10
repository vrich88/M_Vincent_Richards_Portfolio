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
import ImgCard from "./imgCard";
import SampleCard from "./sampleCard";

const Display = () => {
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
        <ImgCard />
        <Stack
          spacing={{ base: 10, md: 0 }}
          display={{ md: "grid" }}
          gridTemplateColumns={{ md: "repeat(3,1fr)" }}
          gridColumnGap={{ md: "1rem" }}
          gridRowGap={{ md: "1rem" }}
        >
          {/* primary sampling of recent work*/}
          <SampleCard />
        </Stack>
      </Box>
    </Flex>
  );
};
export default Display;
