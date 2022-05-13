import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useState } from "react";
import './AdminLogin.css';

import profile from "./images/profile.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";

function AdminLogin() {
    const navigate = useNavigate();
  let handleSubmit = (values) => {
    console.log(values);
    alert("Admin login successfully...");
    navigate("/Admin");
  };
  let handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = " Email cannot be empty";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (values.password.length < 9) {
      errors.password = "Password should have minimum 8 characters";
    }
    return errors;
  };
  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
  
          </div>
  
  
        </div>
        <div>
      <h1>@Admin</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e) => handleValidation(e)}
      >
        {(props) => (
          <Form>
            <div className="first-input">
            
            <img src={email} alt="email" className="email"/>
                        <Field type="email" name="email" placeholder="email" className="name"/>
                        <ErrorMessage name="email">{(error)=><p>{error}</p>}</ErrorMessage>
            </div>
            
            <div className="second-input">
                        <img src={pass} alt="pass" className="email"/>
                        <Field type="password" name="password" placeholder="password" className="name"/>
                        <ErrorMessage name="password">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <br/>
            <button type="submit">Login</button>
            
            <ul className="forgot password">
            <Link to="/forgot Password">
              <br></br>
              <a className="plist">Forgot Password?</a>
            </Link>
            </ul>
          </Form>
        )}
  
      </Formik>
    </div>
    </div>
    </div>
    </div>
  );
}
export default AdminLogin;