import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const onSubmit = (values) => {
  console.log(values);
};

// const validate = (values) => {
//   let errors = {};
//   var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (!values.name) {
//     errors.name = "Required";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!emailRegex.test(values.email)) {
//     errors.email = "Invalid Email Address";
//   }

//   if (!values.phone) {
//     errors.phone = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required!"),
});

function OldFirstForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <h3>Demo Form</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label>Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldFirstForm;
