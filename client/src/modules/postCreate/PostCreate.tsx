import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Flex } from "@rebass/grid";
import { Formik, Form, Field, FormikProps } from "formik";
// import { useDispatch, useSelector } from "react-redux";

// import { postGet } from "../../redux/post/actions";
// import { selectorPost } from "../../redux/post/selectors";

import { Input } from "../../components/formik/Input";
import { Post } from "../../components/post/Post";

import { ValidationSchema, FormValues, initialValues } from "./_formik";

export const PostCreate: React.FC<RouteComponentProps> = () => {
  // const dispatch = useDispatch();
  // const post = useSelector(selectorPost);
  // useEffect(() => {
  //   dispatch(postGet());
  // }, [dispatch]);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        enableReinitialize
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
        render={(formikBag: FormikProps<FormValues>) => {
          return (
            <Form>
              <Flex flexDirection="column" alignItems="center">
                <Flex width={[1, 0.333]} mb={3}>
                  <Field name="title" placeholder="Title" component={Input} maxLength={64} />
                </Flex>
                <Flex width={[1, 0.333]}>
                  <Field
                    name="content"
                    placeholder="Content"
                    multiline
                    rows={5}
                    component={Input}
                    maxLength={1500}
                  />
                </Flex>
              </Flex>
            </Form>
          );
        }}
      />
    </>
  );
};
