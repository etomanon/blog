import React, { useState } from "react";
import { Flex } from "@rebass/grid";
import { format } from "date-fns";
import { useDispatch } from "react-redux";

import { postDelete } from "../../redux/post/actions";
import { PostProps } from "../../types/post";

import { TextHeader } from "../text/styled/TextHeader";
import { Text } from "../text/styled/Text";
import { Category } from "../category/styled/Category";
import { Fade } from "../animation/Fade";

import { PostWrapper, PostDelete, PostLine } from "./styled/Post";

export const Post: React.FC<PostProps> = ({
  id,
  title,
  dateCreated,
  categories,
  content
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const onClick = () => setShow(prev => !prev);
  const onDelete = () => dispatch(postDelete(id));
  return (
    <>
      <PostWrapper onClick={onClick}>
        <PostDelete show={show} onClick={onDelete} />
        <TextHeader mx={3} mb={1} textAlign="center">
          {title}
        </TextHeader>
        <Flex mr={-2} flexWrap="wrap" alignItems="center">
          <Text mt={2} mr={3}>
            {format(dateCreated, "d. M. y")}
          </Text>
          {categories.map(c => (
            <Category key={c} mt={2} mr={2}>
              {c}
            </Category>
          ))}
          <Flex width={1} mt={3}>
            <PostLine show={show} />
          </Flex>
          <Flex width={1}>
            <Fade show={show}>
              <Text mt={3}>{content}</Text>
            </Fade>
          </Flex>
        </Flex>
      </PostWrapper>
    </>
  );
};
