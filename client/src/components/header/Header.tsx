import React from "react";
import { Flex } from "@rebass/grid";

import { NavLink } from "../control/NavLink";
import { Text } from "../text/Text";

import { HeaderWrapper } from "./styled/Header";

export const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper
        m={["1rem 0.5rem", "1rem 0.5rem", "1rem auto"]}
        flexDirection={["column", "row"]}
      >
        <Flex width={1} justifyContent="center" alignItems="center" mb={3}>
          <Text ml={2} mr={3} fontSize={4} mb={[2, 0]}>
            Blog Posts
          </Text>
        </Flex>
        <NavLink exact to="/" mr={[0, 3]} mb={[2, 0]}>
          Home
        </NavLink>
      </HeaderWrapper>
    </>
  );
};
