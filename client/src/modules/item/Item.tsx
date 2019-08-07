import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { useDispatch, useSelector } from "react-redux";

import { PostProps } from "../../types/post";

import { postGet } from "../../redux/post/actions";
import { selectorPost } from "../../redux/post/selectors";

import { Text } from "../../components/text/styled/Text";
import { Post } from "../../components/post/Post";

type TParams = { id: string };

export const Item: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [item, setItem] = useState<PostProps | undefined>(undefined);
  const { id } = match.params;
  const dispatch = useDispatch();
  const post = useSelector(selectorPost);
  useEffect(() => {
    if (post.posts.length === 0) {
      dispatch(postGet());
    }
  }, [dispatch, post.posts.length]);

  useEffect(() => {
    const activeItem = post.posts.find(p => p.id === id);
    setItem(activeItem);
  }, [post.posts, id]);
  return (
    <Flex width={1} justifyContent="center">
      {!item && !post.pending && <Text>No post found</Text>}
      <Flex width={[1, 0.75, 0.5]}>{item && <Post {...item} hideLink />}</Flex>
    </Flex>
  );
};
