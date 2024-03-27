import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  field1: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required('Name is required'),
  field2: Yup.string().email("Invalid email").required("Required"),
  field3: Yup.string()
  .matches(
    /^\+\d{1,2}\s\d{3}-\d{3}-\d{4}$/,
    "Invalid phone number format"
  )
  .required(),
  field4: Yup.string()
  .matches(/^\d+\s+[A-Za-z\s]+$/, "Invalid address format")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  field5: Yup.string()
    .matches(/^\d+$/, "Only digits allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  field6: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  field7: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  field8: Yup.string()
  .matches(/^\d+$/, "Only digits allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .notRequired()
    .nullable(),
  field9: Yup.string()
   .matches(/^\d+$/, "Only digits allowed")
   .length(4, 'E-money Pin must be 4 digits')
    .notRequired()
    .nullable()
});


export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),
  passwword: Yup.string().min(2, "Too Short!")
  .max(50, "Too Long!")
})