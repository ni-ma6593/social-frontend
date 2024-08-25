import { Button } from "@chakra-ui/react";
import Link from "next/link";

const CustomLink = ({ props, children, href }) => {
  return (
    <Link href={href}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};
export default CustomLink;
