/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signInandsignup.scss";
import axios from "axios";
import { ClientEndpoints } from "../../AppUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("* Username is required"),
  password: Yup.string().required("* Password is required"),
});

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("* Username is required"),
  email: Yup.string().email("* Invalid email").required("* Email is required"),
  password: Yup.string().required("* Password is required"),
});

function SignInSignupPage() {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const signInFormRef = useRef(null);
  const signUpFormRef = useRef(null);
  const navigate = useNavigate();

  // Reset form on toggle
  const handleToggle = () => {
    setSignUpMode(!isSignUpMode);
    signInFormRef.current?.resetForm();
    signUpFormRef.current?.resetForm();
  };

  const HandleSignUp = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/${ClientEndpoints.global.signUp}`,
        values
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Sign-up failed. Please try again."
      );
    }
  };

  const HandleSignIn = async (values) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/${ClientEndpoints.global.signIn}`,
        values
      );
      if (response.data.token) {
        sessionStorage.setItem(".auth", response.data.token);
        navigate("/");
      }
      return response.data;
    } catch (error) {
      toast.error("Sign-in error:", error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <div className="auth-page">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Formik
              innerRef={signInFormRef}
              initialValues={{ username: "", password: "" }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                console.log("Sign In Values", values);
                HandleSignIn(values);
              }}
            >
              <Form className="sign-in-form">
                <Navbar.Brand href="/">
                  <ion-icon name="bag" style={{ fontSize: "60px" }}></ion-icon>
                  <h1 className="logo" style={{ fontSize: "70px" }}>
                    Multimart
                  </h1>
                </Navbar.Brand>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <Field type="text" name="username" placeholder="Username" />
                </div>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />

                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />

                <button type="submit" className="btn solid">
                  Login
                </button>

                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </Form>
            </Formik>

            <Formik
              innerRef={signUpFormRef}
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                console.log("Sign Up Values", values);
                HandleSignUp(values);
              }}
            >
              <Form className="sign-up-form">
                <Navbar.Brand href="/">
                  <ion-icon name="bag" style={{ fontSize: "60px" }}></ion-icon>
                  <h1 className="logo" style={{ fontSize: "70px" }}>
                    Multimart
                  </h1>
                </Navbar.Brand>
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <Field type="text" name="username" placeholder="Username" />
                </div>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />

                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <Field type="email" name="email" placeholder="Email" />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />

                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />

                <button type="submit" className="btn">
                  Sign up
                </button>

                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </Form>
            </Formik>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here?</h3>
              <p>Welcome to Multimart! Create your account to get started.</p>
              <button
                className="btn transparent"
                onClick={() => {
                  handleToggle();
                  setSignUpMode(true);
                }}
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>Already have an account? Sign in to continue shopping!</p>
              <button
                className="btn transparent"
                onClick={() => {
                  handleToggle();
                  setSignUpMode(false);
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignupPage;
