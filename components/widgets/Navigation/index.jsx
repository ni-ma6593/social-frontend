import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Spacer,
  useColorMode,
  ButtonGroup,
  IconButton,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Fragment } from "react";
import { PiDotsThreeBold } from "react-icons/pi";

function Navigations({ menu, pathname }) {
  const { colorMode } = useColorMode();

  return (
    <Box h={"fit-content"} px={3} w={"322px"} spacing={3}>
      {menu.map((category, i) => (
        <Fragment key={i}>
          <Box display={"flex"} alignItems={"center"} my={3}>
            <Heading as={"p"} size={"sm"}>
              {category.text}
            </Heading>
            <Spacer />
            <ButtonGroup
              size="sm"
              isAttached
              variant={"ghost"}
              colorScheme={"teal"}
            >
              {category.actions?.map((action, i) => (
                <IconButton key={i}>{action.icon}</IconButton>
              ))}

              <Menu>
                <MenuButton as={IconButton} display={"grid"}>
                  <PiDotsThreeBold />
                </MenuButton>

                {category.menu?.length ? (
                  <MenuList>
                    {category.menu?.map((item) => (
                      <MenuItem key={item.name}>{item.name}</MenuItem>
                    ))}
                  </MenuList>
                ) : null}
              </Menu>
            </ButtonGroup>
          </Box>
          <List ps={2} w={"100%"}>
            {category.children?.map((route, id) => (
              <ListItem key={id}>
                <Button
                  isActive={route.active}
                  as={NextLink}
                  href={"/"}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  w={"-webkit-fill-available"}
                  my={1}
                  color={"gray.600"}
                  _hover={{
                    textDecoration: "none",
                    color: colorMode === "light" ? "#232323" : "#fff",
                  }}
                  _active={{
                    background: "teal",
                    color: "#fff",
                  }}
                  colorScheme={"transparent"}
                  textDecoration={"none"}
                  // leftIcon={<CiHashtag />}
                >
                  {"# - "}
                  {route.text}
                </Button>
              </ListItem>
            ))}
          </List>
        </Fragment>
      ))}
    </Box>
  );
}

export default Navigations;
