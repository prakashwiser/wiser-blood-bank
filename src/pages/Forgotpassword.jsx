import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    outerContainer: {
        backgroundImage: 'url("https://via.placeholder.com/1500x1000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    label: {
        fontSize: '14px',
        color: '#555',
    },
    input: {
        padding: '12px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '14px',
        boxSizing: 'border-box',
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '5px',
    },
    successMessage: {
        color: 'green',
        fontSize: '0.9rem',
        marginTop: '15px',
    },
    button: {
        padding: '12px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
};

const ForgotPasswordForm = () => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, Setdata] = useState([]);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Please enter your email address.'),
    });

    useEffect(() => {
        axios.get('https://67593faf60576a194d140245.mockapi.io/Donor')
            .then(response => {
                Setdata(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = async (values) => {
        const { email } = values;
        if (email) {
            let Filterdata = data.filter(items => items.email === email);
            // console.log(Filterdata);

            if (Filterdata.length > 0) {
                let UserEmail = Filterdata[0].email;
                let UserPassword = Filterdata[0].password;
                let User = {
                    email: UserEmail,
                    password: UserPassword
                };
                try {
                    const response = await emailjs.send('service_7baanbi', 'template_r1gx9e6', User, 'prWY1xVRkSwGQId78');
                    toast.success('Password reset instructions have been sent to your email.'); 
                    navigate('/login')
                } catch (e) {
                    if (e.text && e.text.includes("Gmail_API: Request had insufficient authentication scopes")) {
                        toast.error('Error: Insufficient Gmail API scopes. Please reauthorize Gmail.');
                    } else {
                        toast.error('An error occurred while sending the email. Please try again.');
                    }
                }
            } else {
                toast.error('Email not found.');
            }
        } else {
            toast.error('Please enter a valid email address.');
        }

        setIsLoading(false);
        setMessage('');
    };

    return (
        <>
            <ToastContainer 
                position="top-right" 
                autoClose={5000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                pauseOnFocusLoss 
                draggable 
                pauseOnHover={false} 
            />

            <div style={styles.outerContainer}>
                <div style={styles.formContainer}>
                    <h2 style={styles.heading}>Forgot Password</h2>
                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form style={styles.form}>
                                <div style={styles.inputGroup}>
                                    <label htmlFor="email" style={styles.label}>Email Address:</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        style={styles.input}
                                    />
                                    <ErrorMessage name="email" component="p" style={styles.errorMessage} />
                                </div>
                                {message && <p style={styles.successMessage}>{message}</p>}
                                <button
                                    type="submit"
                                    style={styles.button}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Request Password'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordForm;
