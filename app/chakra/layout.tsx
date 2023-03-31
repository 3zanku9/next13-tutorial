"use client";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider>{props.children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
