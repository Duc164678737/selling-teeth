"use client";

import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import trumpeter from "../../assets/trumpeter.png";

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
      <Box display="flex" justifyContent="center" alignItems="end">
        <Image
          src={trumpeter}
          width={80}
          height={100}
          objectFit="cover"
          alt=""
        />
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          textAlign="center"
          color="red"
          mr={3}
        >
          Đặc biệt
        </Text>
        <Image
          src={trumpeter}
          width={80}
          height={100}
          objectFit="cover"
          alt=""
        />
      </Box>
      <Text
        fontSize="4xl"
        fontWeight="extrabold"
        textAlign="center"
        color="red"
      >
        Miễn phí vận chuyển trong bán kính {"<"} 3 km
      </Text>

      <Box
        mt={10}
        mx={20}
        gap={8}
        display="grid"
        justifyContent="center"
        gridTemplateRows={{
          "2xl": "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(4, 1fr)",
        }}
        gridTemplateColumns={{
          "2xl": "repeat(4, 1fr)",
          xl: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
      >
        <Box
          border="1px solid #00aced"
          display="flex"
          alignItems="center"
          minHeight={100}
          minWidth={210}
          borderTopRightRadius={10}
          borderBottomRightRadius={10}
        >
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#00aced"
            display="flex"
            color="#fff"
            px={8}
            alignItems="center"
          >
            1
          </Text>
          <Text
            fontSize="xl"
            fontWeight={500}
            display="flex"
            textAlign="center"
            justifyContent="center"
            width="100%"
            px={5}
          >
            An toàn - Tin cậy
          </Text>
        </Box>
        <Box
          border="1px solid #f1bf2a"
          display="flex"
          alignItems="center"
          minHeight={100}
          minWidth={210}
          borderTopRightRadius={10}
          borderBottomRightRadius={10}
        >
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#f1bf2a"
            display="flex"
            color="#fff"
            px={8}
            alignItems="center"
          >
            2
          </Text>
          <Text
            fontSize="xl"
            fontWeight={500}
            display="flex"
            textAlign="center"
            justifyContent="center"
            width="100%"
            px={5}
          >
            Đảm bảo chất lượng
          </Text>
        </Box>
        <Box
          border="1px solid #32b96d"
          display="flex"
          alignItems="center"
          minHeight={100}
          minWidth={210}
          borderTopRightRadius={10}
          borderBottomRightRadius={10}
        >
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#32b96d"
            display="flex"
            color="#fff"
            px={8}
            alignItems="center"
          >
            3
          </Text>
          <Text
            fontSize="xl"
            fontWeight={500}
            display="flex"
            textAlign="center"
            justifyContent="center"
            width="100%"
          >
            Giá cả hợp lý
          </Text>
        </Box>
        <Box
          border="1px solid #788ac5"
          display="flex"
          alignItems="center"
          minHeight={100}
          minWidth={210}
          borderTopRightRadius={10}
          borderBottomRightRadius={10}
        >
          <Text
            fontSize="xl"
            fontWeight="extrabold"
            height="100%"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
            background="#788ac5"
            display="flex"
            color="#fff"
            px={8}
            alignItems="center"
          >
            4
          </Text>
          <Text
            fontSize="xl"
            fontWeight={500}
            display="flex"
            textAlign="center"
            justifyContent="center"
            width="100%"
          >
            Tư vấn nhiệt tình
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Service;
