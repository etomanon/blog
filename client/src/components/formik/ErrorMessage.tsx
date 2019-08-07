import React from "react";
import { ErrorMessage as FormikErrorMessage } from "formik";

import { Text } from "../text/styled/Text";

interface ErrorMessageProps {
  name: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({name}) => {
  return (
    <FormikErrorMessage name={name}>
      {msg => (
        <Text mt={2} color="error">
          {msg}
        </Text>
      )}
    </FormikErrorMessage>
  );
};
