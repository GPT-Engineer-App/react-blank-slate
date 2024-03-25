import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ColorList from "../components/ColorList";

const Index = () => {
  return (
    <Box maxW="container.lg" mx="auto" py={8}>
      <Heading as="h1" size="xl" mb={8}>
        Color List
      </Heading>
      <ColorList />
    </Box>
  );
};

export default Index;
