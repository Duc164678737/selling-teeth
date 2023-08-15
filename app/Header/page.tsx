"use client";

import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      justifyContent="space-around"
      display="flex"
      p={6}
      background="rgb(249 250 251 / 1)"
      position="fixed"
      width="100%"
    >
      <Flex fontSize="2xl">
        <Text  fontWeight="bold" color="rgb(147 196 43 / 1)">
          Thanh
        </Text>
        <Text  fontWeight="bold" color="rgb(241 191 42 / 1)">
          Tram
        </Text>
      </Flex>
      <Flex justify="center" align="center" gap={8} color="#9DCD38">
        <Text
          fontSize="xl"
          fontWeight="semibold"
          _hover={{
            color: "#FACC15",
            cursor: "pointer",
          }}
        >
          GIỚI THIỆU
        </Text>
        <Text
          fontSize="xl"
          fontWeight="semibold"
          _hover={{
            color: "#FACC15",
            cursor: "pointer",
          }}
        >
          DỊCH VỤ
        </Text>
        <Text
          fontSize="xl"
          fontWeight="semibold"
          _hover={{
            color: "#FACC15",
            cursor: "pointer",
          }}
        >
          TIN TỨC
        </Text>
        <Text
          fontSize="xl"
          fontWeight="semibold"
          _hover={{
            color: "#FACC15",
            cursor: "pointer",
          }}
        >
          LIÊN HỆ
        </Text>
      </Flex>
      <Flex alignItems="center">
        <PhoneIcon color="rgb(147 196 43 / 1)" />
        <Text fontSize="xl" color="#9DCD38" px={1}>
          Hotline:
        </Text>
        <Text fontSize="lg" color="rgb(245 108 108 / 1)">
          0839065356
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
