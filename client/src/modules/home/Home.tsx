import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { postGet } from "../../redux/post/actions";
import { selectorPost } from "../../redux/post/selectors";

import { Loader } from "../../components/loader/Loader";
import { Post } from "../../components/post/Post";

export const Home: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectorPost);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    dispatch(postGet());
  }, [dispatch]);
  useEffect(() => {
    if (post.error) {
      enqueueSnackbar("Something went wrong. Please try again", {
        variant: "error"
      });
    }
  }, [post.error, enqueueSnackbar]);
  return (
    <>
      {post.pending && <Loader />}
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
