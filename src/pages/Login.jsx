import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbars from '../Components/Navbar';

const LoginForm = () => {
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    setIsLoading(true);
    setLoginError('');

    try {
      const response = await axios.get('https://67593faf60576a194d140245.mockapi.io/Donor');
      const users = response.data;
      console.log(users);

      const user = await users.find((user) => user.email === email);
      console.log(user);


      if (user.userValidate === 'yes' && user.adminValidate === 'yes') {
        console.log('login success');
        localStorage.setItem('userData', user.email)
        navigate('/')
        resetForm();
      } else if (user.userValidate === 'no' && user.adminValidate === 'yes') {
        alert('you are not activate your account, pls check ur mail');
        resetForm();
      } else if (user.userValidate === 'yes' && user.adminValidate === 'no') {
        alert('you are not approved by admin');
        resetForm();
      } else {
        alert('pls check mail and admin');
        resetForm();
      }

      if (!user) {
        setLoginError('Email not found.');
        setIsLoading(false);
        resetForm();
        return;
      }
      if (user.password !== password) {
        setLoginError('Incorrect password.');
        setIsLoading(false);
        resetForm();
        return;
      }
      setIsLoading(false);

    } catch (error) {
      setLoginError('An error occurred while logging in. Please try again.');
      setIsLoading(false);
      resetForm();

    }


  };

  return (
    <>
      <Navbars />
      <div className='banner'>
        <div className="login-form-container">
          <h1>Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className="forgot-password">
                <Link to="/forgot" className='text-dark'>Forgot your password?</Link>
              </div>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              {loginError && <div className="error">{loginError}</div>}
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
