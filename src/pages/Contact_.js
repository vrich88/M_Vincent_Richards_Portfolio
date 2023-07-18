import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Divider,
} from "@chakra-ui/react";

function Contact_() {
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

          <FormControl>
            <FormHelperText >
              Thank you for reaching out to me.<br />
              Be on the lookout for my response.
            </FormHelperText>
          <Divider py="0.5rem"/>
          <Box py="0.5rem">
            <Box py="0.5rem">
              <FormLabel>Your Name:</FormLabel>
              <Input isRequired type="text" placeholder="Future Employer" />
            </Box>
            <Box py="0.5rem">
              <FormLabel>Email address:</FormLabel>
              <Input isRequired type="email" placeholder="email@domain.com"/>
            </Box>
            <Box py="0.5rem">
              <FormLabel>Message:</FormLabel>
              <textarea
                isRequired
                placeholder="Let's talk about working together"
                mt={1}
                rows={3}
                shadow="sm"
                focusBorderColor="brand.400"
                fontSize={{ sm: "sm" }}
              />
            </Box>
          </Box>
            <Divider py="0.5rem"/>
            <FormHelperText >
              P.S.  I'll never share your information.
            </FormHelperText>
          </FormControl>
        </Box>
      </Flex>
    </div>
  );
}

export default Contact_;
