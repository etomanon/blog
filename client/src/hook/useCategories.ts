import React, { useState, useEffect } from 'react';

import { Option } from '../types/select'
import { categoriesLoad } from '../utils/_category'

// load categories for Formik Select
export const useCategories = () => {
  const [categories, setCategories] = useState<Option[]>([]);
  useEffect(() => {
    categoriesLoad()
      .then((categories) => {
        const options = categories.map(c => ({ label: c, value: c }));
        setCategories(options)
      })
      .catch((err) => console.log(err))
  }, []);
  return categories;
}