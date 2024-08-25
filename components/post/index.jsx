/* eslint-disable react-hooks/rules-of-hooks */

// UI
import {
  Box,
  Text,
  Card,
  Flex,
  Input,
  Avatar,
  Button,
  Heading,
  Divider,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";

//Icons
import { BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiHeartStraightFill, PiHeartStraightLight } from "react-icons/pi";

function Post({ picture, name, createdAt, content, liked }) {
  return (
    <>
      <Card
        borderWidth={useColorModeValue("1px", "none")}
        borderColor={useColorModeValue("#e1e1e1", "")}
        boxShadow={"none"}
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={name} src={picture} />

              <Box>
                <Heading size="sm">{name}</Heading>
                <Text>{createdAt}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{content}</Text>
        </CardBody>
        <Divider color={useColorModeValue("#718096", "#CBD5E0")} />
        <CardFooter>
          <ButtonGroup display={"contents"}>
            <Button
              flex="1"
              variant="ghost"
              colorScheme={"red"}
              // onClick={() => setLiked(!liked)}
              leftIcon={
                liked ? <PiHeartStraightFill /> : <PiHeartStraightLight />
              }
            >
              Like
            </Button>

            <Button
              colorScheme={"green"}
              flex="1"
              variant="ghost"
              leftIcon={<BiChat />}
            >
              Comment
            </Button>

            <Button
              colorScheme={"blue"}
              flex="1"
              variant="ghost"
              leftIcon={<BiShare />}
            >
              Share
            </Button>
          </ButtonGroup>
        </CardFooter>
        <Divider color={useColorModeValue("#718096", "#CBD5E0")} />

        <Box gap={3} p={5} display={"flex"} alignItems={"center"}>
          <Avatar size={"sm"} name={"Q K"} src={""} />

          <Input variant={"filled"} placeholder="Add a comment" size="md" />
        </Box>
      </Card>
    </>
  );
}

export default Post;
