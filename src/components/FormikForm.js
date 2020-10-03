import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import Select from "react-select";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  phone: "9988776655",
  address: "",
  items: [""],
  reactSelect: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email").required("Required!"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required!"),
  address: Yup.string().required("Required!"),
  reactSelect: Yup.string().required("Required!"),
});

const itemValidation = (value) => {
  let error;
  if (!value) {
    error = "Item required";
  }
  return error;
};

function FormikForm() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <h2 className="text-center">Demo Form</h2>
          </div>
          <hr />
          <div className="form-control">
            <label>Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="form-control">
            <label>Email</label>
            <FastField type="email" id="email" name="email" />
            <ErrorMessage name="email" component={TextError} />
          </div>

          <div className="form-control">
            <label>Phone</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component={TextError} />
          </div>

          <div className="form-control">
            <label>Address</label>
            <Field name="address">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div>
                    <TextField
                      id="address"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <TextError>{meta.error}</TextError>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className="form-control">
            <label>Items</label>
            <FieldArray name="items">
              {(fieldArrayProps) => {
                const { remove, push, form } = fieldArrayProps;
                const { values } = form;
                const { items } = values;
                return (
                  <div>
                    <Button
                      style={{ margin: "5px" }}
                      variant="contained"
                      color="default"
                      onClick={() => push("")}
                    >
                      Add
                    </Button>
                    {items.map((item, index) => (
                      <div key={index}>
                        <FastField
                          name={`items[${index}]`}
                          validate={itemValidation}
                        >
                          {(props) => {
                            const { field, meta } = props;
                            return (
                              <div>
                                <TextField
                                  style={{ marginTop: "5px" }}
                                  variant="outlined"
                                  {...field}
                                />
                                {meta.touched && meta.error ? (
                                  <TextError>{meta.error}</TextError>
                                ) : null}
                              </div>
                            );
                          }}
                        </FastField>
                        {index !== 0 && (
                          <Button
                            style={{ margin: "5px" }}
                            variant="contained"
                            color="default"
                            onClick={() => remove(index)}
                          >
                            Delete
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
            <div className="form-control">
              <label>React Select</label>
              <Select id="reactSelect" name="reactSelect" options={options} />
            </div>
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </React.Fragment>
  );
}

export default FormikForm;
