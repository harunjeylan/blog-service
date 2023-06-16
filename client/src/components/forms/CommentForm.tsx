"use client";

import { Formik } from "formik";
import * as yup from "yup";
import TextField from "../ui/inputs/TextField";
import Textarea from "../ui/inputs/Textarea";

const CommentForm = () => {
  const phoneRegExp = /^\+?1?\d{9,15}$/;
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    description: "",
  };
  const checkoutSchema = yup.object().shape({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email!").required("Required"),
    phone_number: yup
      .string()
      .matches(phoneRegExp, "phone number is not valid!"),
    description: yup.string().required("Required"),
  });

  const handleCommentFormSubmit = async (
    data: Partial<CommentType & { phone_number: string }>
  ) => {
    console.log(data);
  };

  return (
    <div className="w-full green-pink-gradient p-1 rounded-2xl">
      <Formik
        className="w-full"
        onSubmit={handleCommentFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="w-full font-sans">
            <div className={`grid grid-cols-2 gap-2 my-2 w-full`}>
              <div className={`col-span-2 md:col-span-1`}>
                <TextField
                  label="First Name"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.first_name}
                  name="first_name"
                  isError={!!touched.first_name && !!errors.first_name}
                  helperText={errors.first_name}
                />
              </div>
              <div className={`col-span-2 md:col-span-1`}>
                <TextField
                  label="Last Name"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.last_name}
                  name="last_name"
                  isError={!!touched.last_name && !!errors.last_name}
                  helperText={errors.last_name}
                />
              </div>
              <div className={`col-span-2`}>
                <TextField
                  label="Email Address"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  isError={!!touched.email && !!errors.email}
                  helperText={errors.email}
                />
              </div>
              <div className={`col-span-2`}>
                <TextField
                  label="Phone Number"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone_number}
                  name="phone_number"
                  isError={!!touched.phone_number && !!errors.phone_number}
                  helperText={errors.phone_number}
                />
              </div>

              <div className="col-span-2">
                <Textarea
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  isError={!!touched.description && !!errors.description}
                  helperText={errors.description}
                  rows={5}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                color="secondary"
                className={`px-8 py-3 bg-[#11998e] hover:bg-[#0c6b63] rounded p-2 shadow`}
              >
                Post Comment
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className="flex my-4">
        <p>
          <span className="bg-green-400/5 text-green-500 px-2 py-1 rounded-md">
            Note
          </span>{" "}
          we do not sher you information with any one
        </p>
      </div>
    </div>
  );
};
export default CommentForm;
