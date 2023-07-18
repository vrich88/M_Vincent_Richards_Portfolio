import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import { portfolioCards } from "../assets/data/data";

const SampleCard_ = () => {
  return (
    <>
      {portfolioCards.map((portfolioCard) => (
        <Flex
          key={portfolioCard.id}
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
            <Box px={4} py={2} roundedTop={"lg"}>
              <Link
                color="gray.800"
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontSize="3xl"
                textTransform="uppercase"
                href={portfolioCard.link}
              >
                {portfolioCard.title}
              </Link>
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
              src={portfolioCard.image}
              alt={portfolioCard.alt}
              roundedBottom={"lg"}
            />
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default SampleCard_;