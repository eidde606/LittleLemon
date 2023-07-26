import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/littlelemon4.png";
import MobileDrawerContent from "./MobileDrawerContent";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg="olive"
      color="white"
      px={{ base: 2, md: 4 }}
      py={{ base: 1, md: 2 }}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="lg"
    >
      <Box p={{ base: 1, md: 2 }}>
        <img
          src={logoImage}
          style={{ width: "200px", height: "auto" }}
          alt="Little Lemon Logo"
        />
      </Box>
      <Spacer />
      {/* Burger Button */}
      <Button
        display={{ base: "block", md: "none" }}
        variant="unstyled"
        onClick={onOpen}
        aria-label="Open navigation"
      >
        <svg
          fill="white"
          width="24px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 9h14a1 1 0 010 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 010 2H3a1 1 0 010-2z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {/* Navigation links */}
      <Flex
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box mx={2}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "10px" }}>
            About
          </Link>
          <Link to="/menu" style={{ marginRight: "10px" }}>
            Menu
          </Link>
          <Link to="/reservations" style={{ marginRight: "10px" }}>
            Reservations
          </Link>
          <Link style={{ marginRight: "10px" }}>Order Online</Link>
        </Box>
      </Flex>

      {/* Login Button */}
      <Button colorScheme="teal" variant="outline" ml={{ base: 2, md: 0 }}>
        Log In
      </Button>

      {/* Drawer for mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <MobileDrawerContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default NavBar;
