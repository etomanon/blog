import React from "react";
import { Flex } from "@rebass/grid";

import { PostProps } from "../../types/post";

import { Post } from "../../components/post/Post";

interface HomeViewNormalProps {
  posts: PostProps[];
}

export const HomeViewNormal: React.FC<HomeViewNormalProps> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Flex
          key={post.id}
          p={3}
          width={[1, 0.5, 0.3333]}
          justifyContent="center"
        >
          <Post {...post} />
        </Flex>
      ))}
    </>
  );
};
