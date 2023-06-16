"use client";

import * as yup from "yup";
import { Formik } from "formik";
import TextField from "../ui/inputs/TextField";
import Textarea from "../ui/inputs/Textarea";

const ContactForm = () => {
  const handleContactFormSubmit = (values: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    description: string;
  }) => {};
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

  return (
    <div className="w-full green-pink-gradient p-1 rounded-2xl">
      <div className="w-full bg-primary p-8 rounded-2xl">
        <Formik
          onSubmit={handleContactFormSubmit}
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
            <form onSubmit={handleSubmit} className="w-full">
              <div className={`grid grid-cols-2 gap-4 my-4 w-full`}>
                <div className={`col-span-2 md:col-span-1`}>
                  <TextField
                    type="text"
                    label="First Name"
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
                    type="text"
                    label="Last Name"
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
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    isError={!!touched.email && !!errors.email}
                    helperText={errors.email}
                  />
                </div>
                <div className={`col-span-2 `}>
                  <TextField
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone_number}
                    name="phone_number"
                    isError={!!touched.phone_number && !!errors.phone_number}
                    helperText={errors.phone_number}
                  />
                </div>
                <div className={`col-span-2 `}>
                  <Textarea
                    label="Enter Your Message"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    isError={!!touched.description && !!errors.description}
                    helperText={errors.description}
                    rows={3}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  color="secondary"
                  className={`btn-contain btn-contain-primary`}
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
