"use client";

import { Box } from "@chakra-ui/react";
import Header from "./Header/page";
import Banner from "./Banner/page";
import Content from "./Content/page";
import Notice from "./Notice/page";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Content />
      <Notice />
    </Box>
  );
}
