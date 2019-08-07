import React from "react";
import CreatableSelect from "react-select/creatable";
import { FieldProps } from "formik";

import { theme as AppTheme } from "../../theme/theme";
import { Option } from "../../types/select";

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
  form: { setFieldValue },
  options,
  ...props
}) => {
  return (
    <CreatableSelect
      styles={styles}
      isMulti
      isClearable
      {...field}
      {...props}
      isLoading={options.length === 0}
      options={options}
      label={field.value && field.value.label}
      value={field.value && field.value.value}
      onChange={(option: any) =>
        option
          ? setFieldValue(field.name, option.value)
          : setFieldValue(field.name, [])
      }
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
  );
};
