import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useState } from "react";
import "../register/Register";
import './Login.css';
import axios from "axios";

import profile from "./images/User.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";


function Login(props) {
  
  const navigate = useNavigate();

  const signUpSchema = Yup.object().shape({
      email: Yup.string().email("invalid email").required("email can't be empty"),
      password: Yup.string().required("Password can't be empty").min(8, "password week").max(16, "password too long"),
  });

  let handleSubmit = (values) => {
    console.log(values);
    let EmailId = "jaya@hotmail.com";
    let Password = "jaya@12345";
    
      alert("user login successfully...");
      navigate("/seat");
    
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
        <h1>@User</h1>

    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema = {(signUpSchema)}
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
            
            <div className="forgotpassword">
            <Link to="/password">
              <br></br>
              <a className="plist">Forgot Password?</a>
            </Link>
            </div>
          </Form>
        )}

    </Formik>
  </div>
  </div>
  </div>
  </div>
);
}
export default Login;