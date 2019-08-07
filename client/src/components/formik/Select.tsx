import React from "react";
import CreatableSelect from "react-select/creatable";
import { FieldProps } from "formik";
import { Flex } from "@rebass/grid";

import { theme as AppTheme } from "../../theme/theme";
import { Option } from "../../types/select";

import { ErrorMessage } from "./ErrorMessage";

const styles = {
  container: () => ({
    position: "relative" as "relative",
    width: "100%"
  })
};

interface SelectProps {
  options?: Option[];
}

// multi select, creatable new categories
export const Select: React.FC<SelectProps & FieldProps> = ({
  field,
  form: { setFieldValue, setFieldTouched },
  options,
  ...props
}) => {
  const { name } = field;
  // Formik value to react-select Option
  const valueToOption =
    field.value && field.value.map((v: string) => ({ label: v, value: v }));
  return (
    <Flex width={1} flexDirection="column">
      <CreatableSelect
        {...field}
        {...props}
        styles={styles}
        isMulti
        isClearable
        onFocus={() => setFieldTouched(name, true)}
        isLoading={options && options.length === 0}
        options={options}
        label={valueToOption}
        value={valueToOption}
        closeMenuOnSelect={false}
        onChange={(option: any) => {
          // setFieldValue to Formik
          if (option) {
            const values = option.map((o: Option) => o.value);
            setFieldValue(name, values);
          } else {
            setFieldValue(name, []);
          }
        }}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: AppTheme.colors.primary,
            primary75: AppTheme.colors.primary75,
            primary50: AppTheme.colors.primary50,
            primary25: AppTheme.colors.primary25
          }
        })}
      />
      <ErrorMessage name={name} />
    </Flex>
  );
};
