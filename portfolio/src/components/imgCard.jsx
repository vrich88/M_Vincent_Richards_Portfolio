import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import { featureCard } from "../assets/data/data";

const ImgCard = () => {
  return (
    <>
      <Flex
        bg="blue"
        _dark={{ bg: "#3e3e3e" }}
        p="1rem"
        w="full"
        alignItems="center"
        justifyContent="center"
        rounded="lg"
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800" }}
          maxW="2xl"
          w="full"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={featureCard.image}
            alt={featureCard.alt}
          />
          <Box p={2} roundedBottom={"lg"}>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              href={featureCard.link}
              textAlign={{lg: "center"}}
            >
              {featureCard.title}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {featureCard.description}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default ImgCard;
