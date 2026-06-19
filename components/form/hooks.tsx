import {
  createFormHook,
  createFormHookContexts,
} from "@tanstack/react-form-nextjs"

import {
  FormCheckbox,
  FormCheckboxGroup,
  FormCombobox,
  FormDatePicker,
  FormFileUpload,
  FormInput,
  FormRadioGroup,
  FormSelect,
  FormTextarea,
} from "./reusableFormFields"

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    Input: FormInput,
    Textarea: FormTextarea,
    Select: FormSelect,
    Combobox: FormCombobox,
    Checkbox: FormCheckbox,
    CheckboxGroup: FormCheckboxGroup,
    RadioGroup: FormRadioGroup,
    DatePicker: FormDatePicker,
    FileUpload: FormFileUpload,
  },
  formComponents: {},
  fieldContext,
  formContext,
})

export { useAppForm, withForm, useFieldContext, useFormContext }
