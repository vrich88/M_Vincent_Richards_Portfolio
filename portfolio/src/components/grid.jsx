import React from "react";
import { chakra, Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import SkillBox from "./skillBox";

const Grid = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p="0.5rem"
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p="2rem"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
      >
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{ color: "gray.900" }}
          >
            Skill Set
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color="gray.500"
            _dark={{ color: "gray.400" }}
          >
            These are the tools and languages I work with:
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <SkillBox />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
export default Grid;