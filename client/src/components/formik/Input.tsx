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
  placeholder,
  multiline,
  maxLength,
  rows
}) => {
  const { name } = field;
  return (
    <>
      {multiline ? (
        <TextArea
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          {...field}
        />
      ) : (
        <InputStyled
          placeholder={placeholder}
          {...field}
          maxLength={maxLength}
        />
      )}
      <ErrorMessage name={name} component={() => <Text color="error" />} />
    </>
  );
};
