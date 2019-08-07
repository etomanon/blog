import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { useDispatch, useSelector } from "react-redux";

import { postGet } from "../../redux/post/actions";
import { selectorPost } from "../../redux/post/selectors";

import { Post } from "../../components/post/Post";

export const PostCreate: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectorPost);
  useEffect(() => {
    dispatch(postGet());
  }, [dispatch]);
  return (
    <>
      <Flex m={-3} flexWrap="wrap" alignItems="flex-start">
        {post.posts.map(post => (
          <Flex
            key={post.id}
            p={3}
            width={[1, 0.5, 0.3333]}
            justifyContent="center"
          >
            <Post {...post} />
          </Flex>
        ))}
      </Flex>
    </>
  );
};
