import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { Formik, Form, Field, FormikActions } from "formik";
import { useSnackbar } from "notistack";
import uuid from "uuid/v1";

import ky from "../../ky/ky";
import { useCategories } from "../../hook/useCategories";

import { Text } from "../../components/text/styled/Text";
import { Loader } from "../../components/loader/Loader";
import { Button } from "../../components/control/styled/Button";
import { Input } from "../../components/formik/Input";
import { Select } from "../../components/formik/Select";

import { ValidationSchema, FormValues, initialValues } from "./_formik";

export const PostCreate: React.FC<RouteComponentProps> = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const options = useCategories();
  const onSubmit = (
    values: FormValues,
    formikActions: FormikActions<FormValues>
  ) => {
    setLoading(true);
    formikActions.resetForm();
    const payload: FormValues = {
      ...values,
      id: uuid()
    };
    ky.post("post", { json: payload })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Post created", { variant: "success" });
        history.push("/");
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Something went wrong. Please try again", {
          variant: "error"
        });
      });
  };
  return (
    <>
      {loading && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        enableReinitialize
        onSubmit={onSubmit}
        render={() => {
          return (
            <Form>
              <Flex flexDirection="column" alignItems="center">
                <Flex width={[1, 0.5, 0.333]} mb={3}>
                  <Field
                    name="title"
                    placeholder="Title"
                    component={Input}
                    maxLength={64}
                    autoFocus
                  />
                </Flex>
                <Flex width={[1, 0.5, 0.333]} mb={3}>
                  <Field
                    name="content"
                    placeholder="Content"
                    multiline
                    rows={5}
                    component={Input}
                    maxLength={1500}
                  />
                </Flex>
                <Flex width={[1, 0.5, 0.333]} mb={3} flexWrap="wrap">
                  <Field
                    name="categories"
                    placeholder="Categories*"
                    component={Select}
                    options={options}
                  />
                  <Text fontSize={0}>*Start typing to create new category</Text>
                </Flex>
                <Flex width={[1, 0.5, 0.333]} justifyContent="center">
                  <Button type="submit" width={[1, "auto"]}>
                    Create
                  </Button>
                </Flex>
              </Flex>
            </Form>
          );
        }}
      />
    </>
  );
};
