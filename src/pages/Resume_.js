import React from "react";
import { Box, Flex, Button, VStack } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import MvrResume from "../assets/mvr-resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume_() {
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
        <VStack>
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
            <Document
              file={MvrResume}
              onLoadError={console.error}
              style={{
                width: "100vw",
                height: "auto",
              }}
            >
              <Page pageIndex={0} />
            </Document>
          </Box>
          <Button>
            <a href={MvrResume}>
              Download Resume
            </a>
          </Button>
        </VStack>
      </Flex>
    </div>
  );
}

export default Resume_;
