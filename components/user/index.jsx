import { Avatar, Heading, ListItem } from "@chakra-ui/react";

function User({ name, pic }) {
  return (
    <ListItem my={3} gap={2} display={"flex"} alignItems={"center"}>
      <Avatar w={"40px"} h={"40px"} name={name} src={pic} />
      <Heading as={"p"} size={"sm"}>
        {name}
      </Heading>
    </ListItem>
  );
}

export default User;
