import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbars from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const navigate = useNavigate();
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
      const user = await users.find((user) => user.email === email);
      
      if (!user) {
        setLoginError('Email not found.');
        toast.error('Email not found.', { position: 'top-right', autoClose: 3000 });
        setIsLoading(false);
        resetForm();
        return;
      }

      if (user.password !== password) {
        setLoginError('Incorrect password.');
        toast.error('Incorrect password.', { position: 'top-right', autoClose: 3000 });
        setIsLoading(false);
        resetForm();
        return;
      }

      if (user.userValidate === 'yes' && user.adminValidate === 'yes') {
        toast.success('Login successful!', { position: 'top-right', autoClose: 3000 });
        localStorage.setItem('userData', user.email);
        navigate('/');
        resetForm();
      } else if (user.userValidate === 'no' && user.adminValidate === 'yes') {
        toast.warning('Your account is not activated. Please check your mail.', { position: 'top-right', autoClose: 3000 });
        resetForm();
      } else if (user.userValidate === 'yes' && user.adminValidate === 'no') {
        toast.warning('You are not approved by admin.', { position: 'top-right', autoClose: 3000 });
        resetForm();
      } else {
        toast.error('Please check your email and admin approval.', { position: 'top-right', autoClose: 3000 });
        resetForm();
      }

      setIsLoading(false);

    } catch (error) {
      setLoginError('An error occurred while logging in. Please try again.');
      toast.error('An error occurred. Please try again.', { position: 'top-right', autoClose: 3000 });
      setIsLoading(false);
      resetForm();
    }
  };

  return (
    <>
      <Navbars />
      <ToastContainer />
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
