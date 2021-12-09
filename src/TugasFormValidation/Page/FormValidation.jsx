import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Button = styled.button`
  background: blue;
  border: 1px solid blue;
  border-radius: 6px;
  font-size: 18px;
  color: white;
  padding: 8px 16px;
`;

const Div = styled.div`
  margin: 24px 0;
`;

const Form = styled.form`
  display: block;
  margin: 0 auto;
  text-align: left;
  width: 40%;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  border: 1px solid #333;
  border-radius: 4px;
  height: 34px;
  width: 100%;
`;

const P = styled.p`
  color: #be3b50;
  font-size: 12px;
  margin: 4px 0 8px 0;
`;

const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(1, "Minimum 1 Characters")
        .max(20, "Maximum 20 Characters")
        .required("Required!"),
      username: Yup.string()
        .min(3, "Minimu 3 Characters")
        .max(15, "Maximum 15 Character")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 Characters")
        .required("Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Div>
      <Form onSubmit={formik.handleSubmit}>
        <center>
          <h2>Register</h2>
        </center>

        <Div>
          <Label>Fullname</Label>
          <Input
            type="text"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
          />
          {formik.errors.fullname && formik.touched.fullname && (
            <P>{formik.errors.fullname}</P>
          )}
        </Div>
        <Div>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <P>{formik.errors.username}</P>
          )}
        </Div>
        <Div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <P>{formik.errors.email}</P>
          )}
        </Div>
        <Div>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <P>{formik.errors.password}</P>
          )}
        </Div>
        <Div>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <P>{formik.errors.confirmPassword}</P>
          )}
        </Div>
        <Div>
          <Button type="submit">Submit Form</Button>
        </Div>
      </Form>
    </Div>
  );
};

export default FormValidation;
