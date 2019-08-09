import React from "react";
import { FieldProps } from "formik";
import { Flex } from "@rebass/grid";

import { Input as InputStyled, TextArea } from "./styled/Formik";
import { ErrorMessage } from "./ErrorMessage";

interface InputProps {
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number;
  rows?: number;
  autoFocus?: boolean;
}

export const Input: React.FC<FieldProps & InputProps> = ({
  field,
  form,
  multiline,
  ...props
}) => {
  const { name } = field;
  return (
    <>
      <Flex width={1} flexDirection="column">
        {multiline ? (
          <TextArea autoComplete="off" {...field} {...props} />
        ) : (
          <InputStyled autoComplete="off" {...field} {...props} />
        )}
        <ErrorMessage name={name} />
      </Flex>
    </>
  );
};
