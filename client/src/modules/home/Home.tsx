import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import { postGet } from "../../redux/post/actions";
import { selectorPost } from "../../redux/post/selectors";
import { useCategories } from "../../hook/useCategories";

import { Loader } from "../../components/loader/Loader";

import { HomeHeader } from "./HomeHeader";
import { HomeViewNormal } from "./HomeViewNormal";
import { HomeViewCategory } from "./HomeViewCategory";
import { ViewsProps } from "./_utils";

export const Home: React.FC<RouteComponentProps> = () => {
  const [view, setView] = useState<ViewsProps>("Normal");
  const dispatch = useDispatch();
  const post = useSelector(selectorPost);
  const categories = useCategories(post.posts);
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
      <HomeHeader view={view} setView={setView} />
      <Flex m={-1} flexWrap="wrap" width={1}>
        {view === "Normal" && <HomeViewNormal posts={post.posts} />}
        {view === "Category" && (
          <HomeViewCategory posts={post.posts} categories={categories} />
        )}
      </Flex>
    </>
  );
};
