import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";

import { Text } from "../../components/text/Text";

export const Dashboard: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Text>Dashboard</Text>
      </Flex>
    </>
  );
};
