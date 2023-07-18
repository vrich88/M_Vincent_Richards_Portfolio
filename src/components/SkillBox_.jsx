import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import { skills } from "../assets/data/data";

const SkillBox_ = () => {
  return (
    <>
      {skills.map((skill) => (
        <Flex
          key={skill.id}
          bg="green"
          _dark={{ bg: "#3e3e3e" }}
          p="0.5rem"
          w="full"
          alignItems="center"
          justifyContent="center"
          rounded="lg"
        >
          <Box
            maxW="xs"
            mx="auto"
            bg="white"
            _dark={{ bg: "gray.800" }}
            shadow="lg"
            rounded="lg"
          >
            {skill.name}
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default SkillBox_;