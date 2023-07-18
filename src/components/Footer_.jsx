import React from "react";
import { Link } from "react-router-dom";
import { logos } from "../assets/data/data";
import { myPics } from "../assets/data/data";
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

const Footer_ = () => {
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
              src={logos.tempLogo}
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
        <HStack
          alignItems="center"
          flex={1}
          justify="space-around"
          fontSize={{ base: "12px", md: "16px" }}
          color="gray.800"
          _dark={{ color: "white" }}
          textAlign={{ base: "center", md: "left" }}
          p="1rem"
        >
          <Flex justify="start" direction="column">
            <Link to={myPics.linkedIn}>LinkedIn</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link Link to={myPics.gitHub}>
              Github
            </Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link Link to={myPics.spotify}>
              Spotify
            </Link>
          </Flex>
        </HStack>
        <Divider />
        <Text
          paddingBottom="1rem"
          textAlign="center"
          fontSize="smaller"
          _dark={{ color: "white" }}
        >
          All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer_;
