import { CiCirclePlus } from "react-icons/ci";

const NAVIGATION = [
  {
    text: "Navigation",
    type: "Category",
    children: [
      {
        type: "",
        text: "General",
        active: true,
      },
      {
        type: "",
        text: "Design",
        active: false,
      },
      {
        type: "",
        text: "Engineering",
        active: false,
      },
    ],
  },
  {
    text: "Links",
    type: "Category",
    menu: [
      {
        name: "Edit Category",
      },

      {
        name: "Delete Category",
      },
    ],
    actions: [
      {
        name: "addSpace",
        icon: <CiCirclePlus />,
      },
    ],
    children: [
      {
        type: "link",
        text: "Google",
        active: false,
      },
      {
        type: "link",
        text: "Home Page",
        active: false,
      },
    ],
  },
];
export default NAVIGATION;
