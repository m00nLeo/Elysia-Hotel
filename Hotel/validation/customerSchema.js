import * as yup from "yup";

export const customerSchema = yup
  .object({
    name: yup.string().required("* Your name is Required"),
    title: yup
      .string()
      .required()
      .oneOf(["Mr", "Mss", "Mrs", "Dr"], "* Select a Title"),
    email: yup
      .string()
      .email("This is not a valid email format")
      .required("* Email is required"),
    phone: yup.number().positive().required().typeError("* Must be a number"),
    address: yup.string().required("* Your address is Required"),
    country: yup
      .string()
      .required()
      .oneOf(
        ["AG", "AU", "VN", "CN", "IN", "AN", "US", "CA", "FR", "DE"],
        "* Select a Country"
      ),
    request: yup.string().required("* Your request is Required"),
  })
  .required();
