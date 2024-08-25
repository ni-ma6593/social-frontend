import {
  Avatar,
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { PiDotsThreeBold } from "react-icons/pi";

import { ONLINE_USERS } from "@/fixturres";
import User from "@/components/user";

function Users() {
  return (
    <Box
      p={3}
      rounded={3}
      h={"fit-content"}
      w={"322px"}
      border={useColorModeValue("1px", "none")}
      borderColor={useColorModeValue("#e1e1e1", "")}
      bg={useColorModeValue("white", "black")}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Heading as={"p"} size={"sm"}>
          Recently Active
        </Heading>
        <Spacer />
        <Button
          variant={"ghost"}
          w={"45px"}
          h={"45px"}
          borderRadius={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <PiDotsThreeBold />
        </Button>
      </Box>

      <List my={2} columnGap={3}>
        {ONLINE_USERS.map(({ name, picture, _id }) => (
          <User key={_id} name={name} pic={picture} />
        ))}
      </List>
    </Box>
  );
}

export default Users;
