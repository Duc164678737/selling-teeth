"use client";

import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Phone from "../assets/phone.png";

const Notice = () => {
  return (
    <Box>
      <Box position="fixed" bottom={100} left={14} zIndex={100}>
        <Link href="tel:0839065356">
          <Image src={Phone} alt="" width={50} height={50} />
        </Link>
      </Box>
      
    </Box>
  );
};

export default Notice;
