import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
      .min(6, 'Password must be at least 6 characters')
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
        toast.error('Email not found.', { position: 'top-right', autoClose: 3000 });
        setIsLoading(false);
        resetForm();
        return;
      }

      if (user.password !== password) {
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
      } else {
        const message =
          user.userValidate === 'no'
            ? 'Your account is not activated. Please check your mail.'
            : 'You are not approved by admin.';
        toast.warning(message, { position: 'top-right', autoClose: 3000 });
        resetForm();
      }

      setIsLoading(false);
    } catch (error) {
      toast.error('An error occurred. Please try again.', { position: 'top-right', autoClose: 3000 });
      setIsLoading(false);
      resetForm();
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem', color: '#333', fontWeight: 'bold' }}>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label htmlFor="email" style={{ fontWeight: 'bold', color: '#555' }}>
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    margin: '0.5rem 0',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: 'red', fontSize: '0.875rem' }}
                />
              </div>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label htmlFor="password" style={{ fontWeight: 'bold', color: '#555' }}>
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    margin: '0.5rem 0',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: 'red', fontSize: '0.875rem' }}
                />
              </div>
              <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
                <Link to="/forgot" style={{ fontSize: '0.875rem', color: '#007bff' }}>
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: isLoading ? '#6c757d' : '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                }}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              {loginError && (
                <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '1rem' }}>
                  {loginError}
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
