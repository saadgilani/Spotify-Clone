import React from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("form data ", values);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password required"),
});

export default function Login() {
  return (
    <div>
      <div className="Login_container">
        <div className="header_container">
          <div className="mainflex">
            <img
              className="imgSpotify"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png"
            />
            <h1 className="Login_heading">Spotify</h1>
          </div>
          <h1 className="Login_title">LogIn to your Account</h1>
        </div>
        <div>
          <div className="or_line">
            <span className="bottom_line"></span>
          </div>
        </div>
      </div>
      <div className="Login_form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form action="">
            <div className="formField ">
              <div>
                <label htmlFor="email" className="form_label">
                  Email
                </label>
                <div>
                  <Field
                    className="input_field"
                    type="email"
                    name="email"
                    placeholder="Enter your email."
                  />
                </div>
                <p className="error_message">
                  <ErrorMessage name="email" />
                </p>
              </div>
            </div>
            <div className="formField ">
              <div>
                <label htmlFor="password" className="form_label">
                  Password
                </label>
                <div>
                  <Field
                    className="input_field"
                    type="password"
                    name="password"
                    placeholder="Create a Password."
                  />
                </div>
                <p className="error_message">
                  <ErrorMessage name="password" />
                </p>
              </div>
            </div>

            <div className="button_box">
              <a href="#" className="Login_botton">
                Login
              </a>
            </div>
          </Form>
        </Formik>
        <div className="login_text">
          <p className="loginP">
            Don't Have an Account?
            <a href="#" className="linktologin">
              Signup.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Login };
