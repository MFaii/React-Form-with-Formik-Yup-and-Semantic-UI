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
      name: Yup.string().required("Name requerido"),
      email: Yup.string()
        .email("No es un email valido")
        .required("Email requerido"),
      password: Yup.string()
        .required("Psw Requerida")
        .oneOf([Yup.ref("repeatpassword")], "Las psw no coinciden"),
      repeatpassword: Yup.string()
        .required("Psw Requerida")
        .oneOf([Yup.ref("password")], "Las psw no coinciden"),
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
      <h1>Formulario de registro</h1>
      <Form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellido"
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
          placeholder="repeatpassword"
          name="repeatpassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatpassword}
          value={formik.values.repeatpassword}
        />
        <Button type="submit">Registro</Button>
        <Button type="button" onClick={formik.handleReset}>
          Limpiar Formulario
        </Button>
      </Form>
    </Container>
  );
}

export default App;
