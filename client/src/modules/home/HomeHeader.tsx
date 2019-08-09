import React from "react";
import { Flex } from "@rebass/grid";

import { Text } from "../../components/text/styled/Text";

import { views, ViewsProps } from "./_utils";

interface HomeHeaderProps {
  view: ViewsProps;
  setView: React.Dispatch<React.SetStateAction<ViewsProps>>;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ view, setView }) => {
  return (
    <Flex width={1} mt={1}>
      <Flex
        ml={[0, "auto"]}
        flexWrap="wrap"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mr={[0, 1]}
        width={[1, "auto"]}
      >
        <Text mr={3} mb={1} fontSize={3}>
          View
        </Text>
        <Flex>
          {views.map(v => (
            <Text
              clickable
              onClick={() => setView(v)}
              key={v}
              mr={3}
              fontWeight={v === view ? 700 : 400}
            >
              {v}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
