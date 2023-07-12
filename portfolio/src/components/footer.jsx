import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Divider,
  Icon,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="white" _dark={{ bg: "gray.600" }}>
      <Stack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
            <Image
              src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo&css=%7B%22font-size%20%22%3A%22%2016px%22%7D"
              alt="Company Logo"
              rounded="lg"
              width={{ base: "150px", lg: "200px" }}
              height={{ base: "75px", lg: "100px" }}
              my={{ base: 2, lg: 0 }}
            />
          </Flex>
          <HStack
            alignItems="center"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link to="/about">About Me</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link to="/portfolio">Portfolio</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="center"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Flex justify="start" direction="column">
              <Link to="/contact">Contact</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link Link to="/resume">
                Resume
              </Link>
            </Flex>
          </HStack>
        </Stack>
        <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
          All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
