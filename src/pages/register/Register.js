import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./register.css";
import "../login/Login";

import profile from "./images/profile.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import fname from "./images/name.png";
import lname from "./images/name.png";


function Register() {
    const navigate = useNavigate();

    const signUpSchema = Yup.object().shape({
        fname: Yup.string().required("First Name is required"),
        lname:Yup.string(),
        email: Yup.string().email("invalid email").required("email can't be empty"),
        pwd: Yup.string().required("Password can't be empty").min(8, "password week").max(16, "password too long"),
        confirmPassword: Yup.string().required("confirm password can't be empty").oneOf([Yup.ref("pwd")], "password should match"),
    });

    let signin = () =>{
        navigate("/signin");
    }
    let handleSubmit = async (values) => {
        console.log(values);
        const data = { 
            firstName: values.fname,
            lastName: values.lname,
            emailId: values.email,
            password: values.pwd,
        };
        alert("User Registered Successfully...");
        const res = await axios.post('http://localhost:8081/registeruser', data).then(res => console.log(res.data));
        /* const findUser = await axios.get("http://localhost:8081/getallusers").then(findUser=>console.log(findUser.data)); */
    }
  return (
    <div className="main">
    <div className="sub-container">
    <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
        <div>
            <h1>Register</h1>
            

    <div className="register">
        <Formik initialValues={{fname: "", lname: "", email: "", pwd: "", confirmPassword: ""}}
        onSubmit={handleSubmit}
        validationSchema = {(signUpSchema)}
        >
            {(props)=>(
                <Form>
                    <div className="first-input">
                        <img src={fname} alt="fname" className="email"/>
                        <Field type="text" name="fname" placeholder="First Name" className="name" />
                        <ErrorMessage name="fname">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>

                    <div className="second-input">
                        <img src={lname} alt="lname" className="email"/>
                        <Field type="text" name="lname" placeholder="Last Name" className="name"/>
                        <ErrorMessage name="lname">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>

                    <div className="third-input">
                        <img src={email} alt="email" className="email"/>
                        <Field type="email" name="email" placeholder="email" className="name"/>
                        <ErrorMessage name="email">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>

                    <div className="fourth-input">
                        <img src={pass} alt="pass" className="email"/>
                        <Field type="password" name="pwd" placeholder="password" className="name"/>
                        <ErrorMessage name="pwd">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>

                    <div className="fifth-input">
                        <img src={pass} alt="pass" className="email"/>
                        <Field type="password" name="confirmPassword" placeholder="Re-enter password" className="name" />
                        <ErrorMessage name="confirmPassword">{(error)=><p>{error}</p>}</ErrorMessage>
                    </div>
                    <br></br>
                    <button type="submit">Signup</button>
                    <br></br>
                    <p>If you are already an existing user, then click on the signin button</p>
                    <button onClick={()=>signin()}>Signin</button>
                </Form>
            )}
        </Formik>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Register;