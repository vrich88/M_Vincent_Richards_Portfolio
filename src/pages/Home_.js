import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Welcome from "../components/welcome";

function Home_() {
  return (
    <div>
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
          <Welcome />
        </Box>
      </Flex>
    </div>
  );
}

export default Home_;
