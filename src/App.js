import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name and surname required"),
      email: Yup.string()
        .email("It is not a valid email")
        .required("Email required"),
      password: Yup.string()
        .required("Password required")
        .oneOf([Yup.ref("repeatpassword")], "Passwords do not match"),
      repeatpassword: Yup.string()
        .required("Password required")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Registration Form</h1>
      <Form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Name and surname"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
        />
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Form.Input
          type="password"
          placeholder="Repeat Password"
          name="repeatpassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatpassword}
          value={formik.values.repeatpassword}
        />
        <Button type="submit">Registry</Button>
        <Button type="button" onClick={formik.handleReset}>
          Clean form
        </Button>
      </Form>
    </Container>
  );
}

export default App;
