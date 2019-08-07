import React, { useEffect, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { Formik, Form, Field, FormikProps } from "formik";
// import { useDispatch, useSelector } from "react-redux";

// import { postGet } from "../../redux/post/actions";
// import { selectorPost } from "../../redux/post/selectors";

import ky from "../../ky/ky";

import { useCategories } from "../../hook/useCategories";
import { Button } from "../../components/control/styled/Button";
import { Input } from "../../components/formik/Input";
import { Select } from "../../components/formik/Select";

import { ValidationSchema, FormValues, initialValues } from "./_formik";

export const PostCreate: React.FC<RouteComponentProps> = () => {
  const options = useCategories();
  const onSubmit = (values: FormValues) => {
    console.log("VALUES", values);
    ky.post("post", { json: values })
      .then((res: any) => console.log("RESPONSE", res))
      .catch((err: any) => console.log("ERROR", err));
  };
  return (
    <>
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
                <Flex width={[1, 0.5, 0.333]} mb={3}>
                  <Field
                    name="categories"
                    placeholder="Categories"
                    component={Select}
                    options={options}
                  />
                </Flex>
                <Flex width={[1, 0.5, 0.333]} justifyContent="center">
                  <Button type="submit" width={[1, "auto"]}>Create</Button>
                </Flex>
              </Flex>
            </Form>
          );
        }}
      />
    </>
  );
};
