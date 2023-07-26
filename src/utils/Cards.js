import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Cards = ({ cards }) => {
  return (
    <Box mt={{ base: 4, md: 100 }}>
      <Container maxW="1300px" textAlign="left">
        <Flex justifyContent={"space-between"}>
          <Heading
            size="md"
            mb={4}
            textAlign={{ base: "center", md: "left" }}
            as="i"
          >
            Specials
          </Heading>
          <Button display="flex" mt="-10px" colorScheme="green" boxShadow="md">
            Online Menu
          </Button>
        </Flex>
      </Container>
      <Flex flexWrap="wrap" justifyContent="center">
        {cards.map((card, index) => (
          <Box key={index} m={3} p={4}>
            <Card
              maxW="sm"
              boxShadow="dark-lg"
              rounded="lg"
              borderColor="lightgreen"
              borderWidth="2px"
            >
              <CardBody>
                <Image
                  src={card.imageUrl}
                  alt=""
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <Stack>
                  <HStack justifyContent="space-between">
                    <Heading size="md">{card.title}</Heading>
                    <Text color="olive">{card.price}</Text>
                  </HStack>
                  <Text>{card.content}</Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Cards;
