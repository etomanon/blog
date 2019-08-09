import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  id: Yup.string().notRequired(),
  title: Yup.string()
    .max(64, "Max 64 characters")
    .required("Required"),
  categories: Yup.array()
    .of<string>(Yup.string())
    .min(1, "Add at least one category"),
  content: Yup.string()
    .max(1500, "Max 1500 characters")
    .required("Required")
});

export const initialValues = {
  title: "",
  categories: [],
  content: ""
};

export type FormValues = Yup.InferType<typeof ValidationSchema>;
