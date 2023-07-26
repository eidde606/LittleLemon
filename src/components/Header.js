import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import lemonImage from "../images/littlelemon6.png";

function Header() {
  const title = "Little Lemon";
  return (
    <Flex p={4} flexWrap="wrap" alignItems="center">
      <VStack
        spacing={4}
        w={{ base: "100%", md: "60%" }}
        pr={{ base: 0, md: 4 }}
      >
        <Container maxW="500px" textAlign="left">
          <Text fontSize="5xl" fontWeight="bold" color="black">
            {title}
          </Text>
          <Heading as="h4" size="md" color="black">
            Chicago
          </Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            perferendis eligendi ut quasi commodi excepturi ab quis temporibus
            voluptas. Quibusdam iure commodi repellat nemo, esse ut. Voluptatem
            nulla dolor blanditiis.
          </Text>
          <a href="/reservations">
            <Button colorScheme="green" boxShadow="md">
              Reserve Table
            </Button>
          </a>
        </Container>
      </VStack>
      <Box
        flexShrink={0}
        w={{ base: "100%", md: "15%" }}
        mt={{ base: 4, md: 0 }}
        ml={{ base: 0, md: "150px" }}
      >
        <Image src={lemonImage} />
      </Box>
    </Flex>
  );
}

export default Header;
