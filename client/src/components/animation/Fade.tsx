import React from "react";
import { Transition } from "react-transition-group";

import { FadeIn } from "./styled/Animation";

interface FadeProps {
  show: boolean;
}

export const Fade: React.FC<FadeProps> = ({ show, children }) => {
  return (
    <Transition in={show} timeout={200}>
      {state => (
        // state change: exited -> entering -> entered -> exiting -> exited
        <FadeIn state={state}>{children}</FadeIn>
      )}
    </Transition>
  );
};
