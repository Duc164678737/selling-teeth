"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Service = () => {
  return (
    <>
      <Text
        m={8}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        textAlign="center"
      >
        Chào mừng tới với shop Thành Trâm
      </Text>
      <Text fontSize="4xl" fontWeight="extrabold" textAlign="center">
        Vận chuyển toàn quốc, mọi nơi !!!
      </Text>
      <Text
        fontSize="4xl"
        fontWeight="extrabold"
        textAlign="center"
        color="red"
      >
        Đặc biệt
      </Text>
      <Text
        fontSize="4xl"
        fontWeight="extrabold"
        textAlign="center"
        color="red"
      >
        Miễn phí vận chuyển trong bán kính {"<"} 3 km
      </Text>
      <Flex gap={8} flexWrap="wrap" justifyContent="space-between">
        <Box border="1px solid #00aced" display="flex" alignItems="center">
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#00aced"
            display="flex"
            color="#fff"
            px={5}
            alignItems="center"
          >
            1
          </Text>
          <Text fontSize="xl" fontWeight={500}>
            An toàn - Tin cậy
          </Text>
        </Box>
        <Box border="1px solid #00aced" display="flex" alignItems="center">
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#00aced"
            display="flex"
            color="#fff"
            px={5}
            alignItems="center"
          >
            2
          </Text>
          <Text fontSize="xl" fontWeight={500}>
            Đảm bảo chất lượng
          </Text>
        </Box>
        <Box border="1px solid #00aced" display="flex" alignItems="center">
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#00aced"
            display="flex"
            color="#fff"
            px={5}
            alignItems="center"
          >
            3
          </Text>
          <Text fontSize="xl" fontWeight={500}>
            Giá cả hợp lý
          </Text>
        </Box>
        <Box border="1px solid #00aced" display="flex" alignItems="center">
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#00aced"
            p={5}
            color="#fff"
          >
            4
          </Text>
          <Text fontSize="xl" fontWeight={500}>
            Tư vấn nhiệt tình
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Service;
