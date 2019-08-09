import React from "react";
import { Flex } from "@rebass/grid";

import { PostProps } from "../../types/post";
import { Option } from "../../types/select";

import { Text } from "../../components/text/styled/Text";
import { Post } from "../../components/post/Post";

interface HomeViewCategoryProps {
  posts: PostProps[];
  categories?: Option[];
}

export const HomeViewCategory: React.FC<HomeViewCategoryProps> = ({
  posts,
  categories
}) => {
  return (
    <>
      {categories &&
        categories.map(c => (
          <React.Fragment key={c.label}>
            <Text width={1} fontSize={4} p={3}>
              {c.label}
            </Text>
            {posts.map(post =>
              post.categories.indexOf(c.label) !== -1 ? (
                <Flex
                  key={post.id}
                  p={3}
                  width={[1, 0.5, 0.3333]}
                  justifyContent="center"
                >
                  <Post {...post} />
                </Flex>
              ) : null
            )}
          </React.Fragment>
        ))}
    </>
  );
};
