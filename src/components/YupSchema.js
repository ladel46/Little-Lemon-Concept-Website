import * as yup from "yup";
export const YupSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  occassion: yup.string(),
  information: yup.string(),
});
