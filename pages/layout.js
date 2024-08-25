import Header from "@/components/containers/Header";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box mt={5}>{children}</Box>
    </>
  );
};
export default Layout;
