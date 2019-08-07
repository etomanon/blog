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
  options: Option[];
}

export const Select: React.FC<SelectProps & FieldProps> = ({
  field,
  form: { setFieldValue, setFieldTouched },
  options,
  ...props
}) => {
  const { name } = field;
  return (
    <Flex width={1} flexDirection="column">
      <CreatableSelect
        styles={styles}
        isMulti
        isClearable
        {...field}
        {...props}
        onFocus={() => setFieldTouched(name, true)}
        isLoading={options.length === 0}
        options={options}
        label={field.value && field.value.label}
        value={field.value && field.value.value}
        closeMenuOnSelect={false}
        onChange={(option: any) => {
          if (option) {
            const values = option.map((o: Option) => o.value)
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
