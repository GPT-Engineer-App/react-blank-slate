import React, { useState, useEffect } from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

const ColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch("https://api.color.pizza/v1/");
      const data = await response.json();
      setColors(data.colors);
    };

    fetchColors();
  }, []);

  return (
    <Wrap spacing={4}>
      {colors.map((color) => (
        <WrapItem key={color.hex}>
          <Box bg={`#${color.hex}`} w="100px" h="100px" borderRadius="md" />
          <Text mt={2}>{color.name}</Text>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ColorList;
