import React from "react";
import Post from "./";
import { POST_DATA } from "@/fixturres";

export default {
  component: Post,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export const P = () => (
  <Post
    picture={POST_DATA[0].user.profile.picture}
    name={POST_DATA[0].user.profile.name}
    createdAt={POST_DATA[0].createdAt}
    content={POST_DATA[0].content}
    liked={false}
  />
);
P.storyName = "Post CMP";
