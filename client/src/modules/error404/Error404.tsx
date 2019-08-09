import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Text } from "../../components/text/styled/Text";

export const Error404: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Text display="block" textAlign="center" mb={2}>
        Error 404
      </Text>
      <Text display="block" textAlign="center">
        Not found
      </Text>
    </>
  );
};
