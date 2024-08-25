//cores
import { useState } from "react";
import { usePathname } from "next/navigation";

// UI
import { Flex, Container } from "@chakra-ui/react";

// Locals
import { Posts } from "@/components/home";
import Navigations from "@/components/widgets/Navigation";
import Users from "@/components/widgets/Users";
import { NAVIGATION } from "@/fixturres";

const IndexPage = () => {
  const pathname = usePathname();

  return (
    <Container maxW={"container.xxl"} h={"100vh"}>
      <Flex gap={2}>
        <Navigations menu={NAVIGATION} pathname={pathname} />
        <Posts />
        <Users />
      </Flex>
    </Container>
  );
};

export default IndexPage;
