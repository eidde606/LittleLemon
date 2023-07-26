import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";
import footerImage from "../images/littlelemon4.png";

const About = () => {
  return (
    <Flex justifyContent="space-around">
      <Container>
        <Card padding="10px" boxShadow="dark-lg" mt="25px">
          <CardBody>
            <h1>About Little Lemon</h1>
            <p>
              Little Lemon is a family-owned restaurant that started as a small
              lemonade stand in our neighborhood. Over the years, we have grown
              into a cozy and welcoming eatery, offering a variety of delicious
              dishes and refreshing beverages.
            </p>
            <p>
              Our mission is to provide our customers with high-quality, fresh,
              and tasty meals at affordable prices. We take pride in sourcing
              our ingredients from local farmers and ensuring that each dish is
              made with love and care.
            </p>
            <p>
              Whether you're craving a hearty meal, a light snack, or a
              refreshing lemonade, we have something to satisfy your taste buds.
              Come visit us at Little Lemon and experience the joy of good food
              and warm hospitality.
            </p>
            <p>Thank you for being a part of our journey!</p>
          </CardBody>
          <CardFooter>
            <Image src={footerImage} height="auto" width="30%" />
          </CardFooter>
        </Card>
      </Container>
    </Flex>
  );
};

export default About;
