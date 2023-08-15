"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React from "react";
import background1 from "../assets/background1.jpg";
import Image from "next/image";
import "./banner.css";

const Banner = () => {
  return (
    <Box pt={84}>
      <Box
        className="banner"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Image
          src={background1}
          alt="Thanh Tram"
          width={400}
          height={400}
          objectFit="cover"
        />
        <Box
          backgroundColor="#e7e8e9"
          width={550}
          px={8}
          py={4}
          borderRadius={8}
        >
          <FormControl isRequired>
            <Flex gap={4} pb={4}>
              <Flex flexDirection="column">
                <FormLabel>Họ và tên</FormLabel>
                <Input placeholder="Họ và tên" border="1px solid #b9b5b5 " />
              </Flex>
              <Flex flexDirection="column">
                <FormLabel>Số điện thoại</FormLabel>
                <Input
                  placeholder="Số điện thoại"
                  border="1px solid #b9b5b5 "
                />
              </Flex>
            </Flex>
            <FormLabel>Địa chỉ</FormLabel>
            <Input placeholder="Địa chỉ" border="1px solid #b9b5b5 " />
            <Button
              mt={4}
              width="100%"
              type="submit"
              border="2px solid #00aced"
              color="#00aced"
              _hover={{
                color: "#fff",
                background: "#00aced",
              }}
            >
              Xác nhận
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
