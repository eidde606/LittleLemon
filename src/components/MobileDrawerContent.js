import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MobileDrawerContent = () => {
  return (
    <Box>
      <Box my={2}>
        <Link to="/" display="block">
          Home
        </Link>
      </Box>
      <Box my={2}>
        <Link to="/about" display="block">
          About
        </Link>
      </Box>
      <Box my={2}>
        <Link to="/menu" display="block">
          Menu
        </Link>
      </Box>
      <Box my={2}>
        <Link to="/reservations" display="block">
          Reservations
        </Link>
      </Box>
      <Box my={2}>
        <Link display="block">Order Online</Link>
      </Box>
    </Box>
  );
};

export default MobileDrawerContent;
