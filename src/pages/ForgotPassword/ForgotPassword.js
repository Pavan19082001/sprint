import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from "react-router-dom";
import './ForgotPassword.css';

function ForgotPassword() {
  let handleSubmit = (values) => {
    console.log(values);
  };
  let handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = " Email cannot be empty";
    }
    
    return errors;
  };
  return (
    <div className="hello">
        <h1>Reset Password</h1>
      
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e) => handleValidation(e)}
      >
        {(props) => (
          <Form>
            <div>
              <label>Email Id:</label>
              
              <Field type="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <br/>
            
            <br/>
            <button type="submit">submit</button>
            
            
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default ForgotPassword;