import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";

export default function Navbar() {
  return (
    <Container maxW="1140px" px="4">
      <Flex justifyContent="space-between" alignItems="center" py="4">
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign={"center"}
          colorPalette={"teal"}
        >
          <Link to="/">Product store 🛒</Link>
        </Text>
        <HStack alignItems={"center"} spacing="2">
          <Link to="/">
            <AiFillAppstore />
          </Link>
          <Link to="/create">
            <BsFillPlusSquareFill />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}
