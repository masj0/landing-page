import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { Rating } from "react-simple-star-rating";

function CardComponent() {
  return (
    <Card maxW="220px">
      <CardBody>
        <Image
          src={faker.image.url()}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{faker.commerce.product()}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <div
            style={{
              direction: "ltr",
              fontFamily: "sans-serif",
              touchAction: "none",
            }}
          >
            <Rating
              initialValue={faker.string.alphanumeric({
                length: { min: 0, max: 3 },
              })}
              onClick={function noRefCheck() {}}
              transition
              SVGstyle={{ display: "inline" }}
              size={17}
            />
          </div>
          <Text color="teal" fontSize="2xl">
            ${faker.commerce.price()}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            size={"sm"}
            colorScheme="teal"
            onClick={() => console.log("hehe")}
          >
            Buy now
          </Button>
          <Button variant="ghost" size={"sm"} colorScheme="teal">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default CardComponent;
