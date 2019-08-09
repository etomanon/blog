import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";

import { Option } from "../types/select";
import { PostProps } from "../types/post";
import { categoriesLoad } from "../utils/_category";

// load categories for Formik Select
// pass posts to update categories if posts change
export const useCategories = (posts?: PostProps[]) => {
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState<Option[] | undefined>([]);
  useEffect(() => {
    categoriesLoad()
      .then(categories => {
        const options = categories.map(c => ({ label: c, value: c }));
        if (options.length === 0) {
          setCategories(undefined);
        } else {
          setCategories(options);
        }
      })
      .catch(() =>
        enqueueSnackbar("Could not load categories. Please try again", {
          variant: "error"
        })
      );
  }, [enqueueSnackbar, posts]);
  return categories;
};
