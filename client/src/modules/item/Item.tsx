import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";

import { Text } from "../../components/text/styled/Text";
import {Post} from '../../components/post/Post';

type TParams = { id: string };

export const Item: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Text>Post</Text>
      </Flex>
    </>
  );
};
