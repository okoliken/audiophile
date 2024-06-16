import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required('Name is required'),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
  .matches(
    /^\+\d{1,2}\s\d{3}-\d{3}-\d{4}$/,
    "Invalid phone number format"
  )
  .required(),
  address: Yup.string()
  .matches(/^\d+\s+[A-Za-z\s]+$/, "Invalid address format")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Address is required"),
  zipCode: Yup.string()
    .matches(/^\d+$/, "Only digits allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("ZipCode is required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("City is Required"),
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("country is required"),
  eNumber: Yup.string()
  .matches(/^\d+$/, "Only digits allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .notRequired()
    .nullable(),
  ePin: Yup.string()
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