import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image } from "@chakra-ui/react";
import { myPics } from "../assets/data/data";

const Welcome = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} >
      <Flex >
        <Image
          src={myPics.headshot}
          alt="photo of M. Vincent Richards"
          bg="gray.100"
          loading="lazy"
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.h1
          py="0.5rem"
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="brand.600"
          _dark={{ color: "gray.300" }}
        >
          Ahoy!
        </chakra.h1>
        <chakra.p
          fontSize="lg"
          color="brand.600"
          _dark={{ color: "gray.400" }}
          letterSpacing="wider"
        >
          I am a Full Stack Web Developer in Texas. I am ...
          the rest is just filler to see how big of a paragraph to write 
          the rest is just filler to see how big of a paragraph to write 
          the rest is just filler to see how big of a paragraph to write 
          the rest is just filler to see how big of a paragraph to write 
          the rest is just filler to see how big of a paragraph to write 
        </chakra.p>
        <Box
          display="inline-flex"
          gap="5rem"
          bg="transparent"
          alignItems="center"
          justifyContent="center"
          py="1rem"
        >
          <chakra.a
            color={["primary.800"]}
            alignItems="center"
            justifyContent="center"
            p="0.5rem"
            fontWeight="bold"
            w="50%"
            rounded="md"
            // _light={{ color: "white" }}
            bg={["primary.500"]}
            // _dark={{ bg: "brand.500" }}
            _hover={{
              bg: "brand.700",
              _dark: { bg: "brand.600" },
            }}
          >
            Hire Me
          </chakra.a>
          <chakra.a
            color={["primary.800"]}
            alignItems="center"
            justifyContent="center"
            p="0.5rem"
            fontWeight="bold"
            w="50%"
            rounded="md"
            // _light={{ color: "white" }}
            bg={["primary.500"]}
            // _dark={{ bg: "brand.500" }}
            _hover={{
              bg: "brand.700",
              _dark: { bg: "brand.600" },
            }}
            whiteSpace="nowrap"          >
            Read More
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default Welcome;
