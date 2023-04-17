import React from "react";
import "./Signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  verifyEmail: "",
  password: "",
  day: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name required "),
  email: Yup.string().email("Invalid email").required("Email is required"),
  verifyEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Emails must match")
    .required("Confirm email is required"),
  password: Yup.string().required("Password required"),
  profile_name: Yup.string().required("Profile name is required"),
  day: Yup.string().required("Required"),
  channel: Yup.string().required("Channel required"),
});

export default function Signup() {
  return (
    <div>
      <div className="signUp_container">
        <div className="header_container">
          <div className="mainflex">
            <img
              className="imgSpotify"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png"
            />
            <h1 className="signup_heading">Spotify</h1>
          </div>
          <h1 className="signup_title">Sign Up for free to start listening.</h1>
        </div>
        <div>
          <div className="or_line">
            <span className="bottom_line"></span>
          </div>
        </div>
      </div>
      <div className="signup_form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form action="">
            <div className="formField ">
              <div>
                <label htmlFor="email" className="form_label">
                  What is your email?
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
                <label htmlFor="email" className="form_label">
                  Confirm your email?
                </label>
                <div>
                  <Field
                    className="input_field"
                    type="email"
                    name="verifyEmail"
                    placeholder="Confrim your email again."
                  />
                </div>
                <p className="error_message">
                  <ErrorMessage name="verifyEmail" />
                </p>
              </div>
            </div>
            <div className="formField ">
              <div>
                <label htmlFor="password" className="form_label">
                  Create a Password
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
            <div className="formField ">
              <div>
                <label htmlFor="password" className="form_label">
                  What should we call you?
                </label>
                <div>
                  <Field
                    className="input_field"
                    type="text"
                    name="profile_name"
                    placeholder="Enter a Profile name."
                  />
                </div>
                <p className="error_message">
                  <ErrorMessage name="profile_name" />
                </p>
              </div>
            </div>
            <div className="formField ">
              <div>
                <label htmlFor="dob" className="form_label">
                  What's your date of birth?
                </label>
                <div>
                  <div className="dob_box">
                    <div className="dob_day">
                      <div className="">
                        <div>
                          <label htmlFor="day" className="dob_label">
                            Day
                          </label>
                        </div>
                        <Field
                          type="text"
                          name="day"
                          className="dob_input"
                          placeholder="DD"
                        />
                      </div>
                    </div>
                    <div className="dob_month">
                      <div className="">
                        <div>
                          <label htmlFor="month" className="dob_label">
                            Month
                          </label>
                        </div>

                        <select name="month" className="select_m">
                          <option value="01" className="select_Month">
                            January
                          </option>
                          <option value="02">Febuary</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                    </div>
                    <div className="dob_year">
                      <div className="">
                        <div>
                          <label htmlFor="year" className="dob_label">
                            Year
                          </label>
                        </div>
                        <Field
                          type="number"
                          name="year"
                          className="dob_input"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="error_message">
                      <ErrorMessage name="day" />
                    </p>
                    <p className="error_message">
                      <ErrorMessage name="year" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="formField ">
              <div>
                <label htmlFor="gender" className="form_label">
                  What's your gender?
                </label>
                <div className="select_Gender">
                  <Field className="" type="radio" name="gender" value="Male" />
                  <label htmlFor="male">Male</label>
                  <Field
                    className=""
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="male">Female</label>
                  <Field
                    className=""
                    type="radio"
                    name="gender"
                    value="notToSay"
                  />
                  <label htmlFor="male">Prefer not to say</label>
                </div>
              </div>
            </div>

            <div>
              <p className="signUp_text">
                By clicking on sign-up, you agree to Spotify's. To learn more
                about terms and condition click here
                <br />
                <a href="#">Terms and Conditions of Use.</a>
              </p>
            </div>
            <div className="button_box">
              <a href="#" className="signUp_botton">
                Sign up
              </a>
            </div>
          </Form>
        </Formik>
        <div className="login_text">
          <p className="loginP">
            Have a Account?
            <a href="#" className="linktologin">
              Log in.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Signup };
