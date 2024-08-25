import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiBellOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { HiOutlineCog } from "react-icons/hi";
import Post from "../post";
import { POST_DATA } from "@/fixturres";

function Posts() {
  return (
    <Box
      h={"fit-content"}
      flex={1}
      display={"flex"}
      justifyContent={"center"}
      gap={3}
      flexDirection={"column"}
    >
      <Box
        p={4}
        display={"flex"}
        alignItems={"center"}
        borderRadius={3}
        bg={useColorModeValue("white", "black")}
      >
        <Heading size={"lg"}>Home</Heading>
        <Spacer />
        <ButtonGroup>
          <Button colorScheme="teal" variant="ghost">
            <HiOutlineCog />
          </Button>
          <Button colorScheme="teal" variant="ghost">
            <CiBellOn />
          </Button>
        </ButtonGroup>
      </Box>
      <Card boxShadow={"none"} borderRadius={3}>
        <CardBody
          as={Button}
          color={"gray"}
          colorScheme="gray"
          variant="solid"
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={5}
          cursor={"pointer"}
        >
          <FaPlus />
          <Text>{"What's on your mind?"}</Text>
        </CardBody>
      </Card>
      {POST_DATA.map(({ id, content, createdAt, user, liked }, i) => (
        <Post
          key={i}
          content={content}
          createdAt={createdAt}
          name={user.profile.name}
          picture={user.profile.picture}
          liked={liked}
          // setLiked={setLiked}
        />
      ))}
    </Box>
  );
}

export default Posts;
