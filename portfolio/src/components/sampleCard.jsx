import React from "react";
import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import { portfolioCards } from "../assets/data/data";

const SampleCard = () => {
  return (
    <>
      {portfolioCards.map((portfolioCard) => (
        <Flex
          key={portfolioCard.id}
          bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          p={50}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            maxW="xs"
            mx="auto"
            bg="white"
            _dark={{ bg: "gray.800" }}
            shadow="lg"
            rounded="lg"
          >
            <Box px={4} py={2}>
              <chakra.h1
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontSize="3xl"
                textTransform="uppercase"
              >
                {portfolioCard.title}
              </chakra.h1>
              <chakra.p
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                {portfolioCard.description}
              </chakra.p>
            </Box>

            <Image
              h={48}
              w="full"
              fit="cover"
              mt={2}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
              alt="NIKE AIR"
            />

            <Flex
              alignItems="center"
              justifyContent="space-between"
              px={4}
              py={2}
              bg="gray.900"
              roundedBottom="lg"
            >
              <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                $129
              </chakra.h1>
              <chakra.button
                px={2}
                py={1}
                bg="white"
                fontSize="xs"
                color="gray.900"
                fontWeight="bold"
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: "gray.200",
                }}
                _focus={{
                  bg: "gray.400",
                }}
              >
                Add to cart
              </chakra.button>
            </Flex>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default SampleCard;