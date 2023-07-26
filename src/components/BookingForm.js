import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";

const BookingForm = ({ fields, formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Flex justifyContent="center" mt="40px">
        <Box w={{ base: "90%", md: "500px" }}>
          <Card boxShadow="dark-lg" p="4" bg="whitesmoke" rounded="lg">
            <Heading textAlign="center">Reserve Table</Heading>

            <CardBody>
              {fields.map((field) => (
                <FormControl key={field.name} mb="4">
                  <FormLabel>{field.label}</FormLabel>
                  {field.type === "select" ? (
                    <Select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      boxShadow="md"
                      bg="white"
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      boxShadow="md"
                      bg="white"
                    />
                  )}
                </FormControl>
              ))}
            </CardBody>
            <Button
              type="submit"
              colorScheme="green"
              boxShadow="sm"
              width="100%"
            >
              Submit
            </Button>
          </Card>
        </Box>
      </Flex>
    </form>
  );
};

export default BookingForm;
