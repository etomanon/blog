import React from "react";
import { FieldProps, getIn, ErrorMessage } from "formik";

import { Text } from "../text/styled/Text";

import { Input as InputStyled, TextArea } from "./styled/Formik";

interface InputProps {
  placeholder?: string;
  multiline?: boolean;
  maxLength?: number;
  rows?: number;
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
      {multiline ? (
        <TextArea autoComplete="off" {...field} {...props} />
      ) : (
        <InputStyled autoComplete="off" {...field} {...props} />
      )}
      <ErrorMessage name={name} component={() => <Text color="error" />} />
    </>
  );
};
