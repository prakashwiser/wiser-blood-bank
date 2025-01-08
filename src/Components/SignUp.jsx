import axios from 'axios';
import React from 'react';
import emailjs from '@emailjs/browser';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const adminEmail = "prakashvadakadu8@gmail.com";

function SignUp() {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[A-Za-z\s ]+$/, 'Name must contain only letters and spaces')
            .min(2, 'Minimum 2 characters')
            .max(15, 'Maximum 15 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        number: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
            .required('Phone number is required'),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/,
                'Password must have one uppercase letter, one symbol, and be 6-20 characters long'
            )
            .required('Password is required'),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleFormSubmit = async (values, { resetForm, setFieldError }) => {
        try {

            const response = await axios.get('https://67593faf60576a194d140245.mockapi.io/Donor');
            const existingUser = response.data.find(user => user.email === values.email);

            if (existingUser) {
                setFieldError('email', 'This email is already registered. Please use a different email.');
                toast.error('This email is already registered. Please use a different email.', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
                return;
            }

            const userResponse = await axios.post('https://67593faf60576a194d140245.mockapi.io/Donor', {
                name: values.name,
                email: values.email,
                number: values.number,
                password: values.password,
                userValidate: 'no',
                adminValidate: 'no',
            });
            const updateResponse = await axios.get('https://67593faf60576a194d140245.mockapi.io/Donor');
            let UpdateExistingUser = updateResponse.data.find(user => user.email === values.email);
            let updateValues = { ...UpdateExistingUser, link: `https://wiser-blood-banks.vercel.app/mail/${UpdateExistingUser.id}`, adminEmail, adminLink: `https://wiser-blood-banks.vercel.app/admin/${UpdateExistingUser.id}` };
            try {
                await emailjs.send('service_p8uoogm', 'template_951ocpd', updateValues, 'm4PILZ5HjxJt37hVX');
                toast.success('Email sent successfully to the user.', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
            } catch (e) {
                toast.error('Failed to send email to the user.', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
            }

            try {
                await emailjs.send('service_p8uoogm', 'template_11t1xvd', updateValues, 'm4PILZ5HjxJt37hVX');
                toast.success('Admin email sent successfully.', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
            } catch (e) {
                toast.error('Failed to send email to the admin.', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
            }
            navigate('/login');
        } catch (error) {
            toast.error('An error occurred while submitting the form. Please try again later.', {
                position: "top-right",
                autoClose: 5000,
                pauseOnHover: true,
            });
        }
    };

    return (
        <div
        className="p-5"
        style={{
            backgroundColor: "#f8f9fa",
            minHeight: "100vh", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Row className="w-100">
            <Col lg={4}></Col>
            <Col lg={4}>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        number: "",
                        password: "",
                        cpassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {({ errors, touched }) => (
                        <FormikForm
                            className="signup"
                            style={{
                                padding: "2rem",
                                backgroundColor: "white",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                                maxWidth: "400px",
                                margin: "0 auto",
                            }}
                        >
                            <div
                                className="fs-3 fw-bold mb-4 text-center"
                                style={{
                                    color: "#333",
                                }}
                            >
                                <FaUserCircle style={{ fontSize: "2.5rem", color: "#dc3545" }} />
                                <div>Sign Up</div>
                            </div>
    
                            <Form.Group className="mb-3">
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className={`form-control ${
                                        errors.name && touched.name ? "is-invalid" : ""
                                    }`}
                                    style={{
                                        borderColor: errors.name && touched.name ? "#dc3545" : "",
                                    }}
                                />
                                {errors.name && touched.name && (
                                    <div
                                        style={{
                                            color: "#dc3545",
                                            fontSize: "0.875rem",
                                            marginTop: "0.25rem",
                                        }}
                                    >
                                        {errors.name}
                                    </div>
                                )}
                            </Form.Group>
    
                            <Form.Group className="mb-3">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className={`form-control ${
                                        errors.email && touched.email ? "is-invalid" : ""
                                    }`}
                                    style={{
                                        borderColor: errors.email && touched.email ? "#dc3545" : "",
                                    }}
                                />
                                {errors.email && touched.email && (
                                    <div
                                        style={{
                                            color: "#dc3545",
                                            fontSize: "0.875rem",
                                            marginTop: "0.25rem",
                                        }}
                                    >
                                        {errors.email}
                                    </div>
                                )}
                            </Form.Group>
    
                            <Form.Group className="mb-3">
                                <Field
                                    name="number"
                                    type="text"
                                    placeholder="Number"
                                    className={`form-control ${
                                        errors.number && touched.number ? "is-invalid" : ""
                                    }`}
                                    style={{
                                        borderColor: errors.number && touched.number ? "#dc3545" : "",
                                    }}
                                />
                                {errors.number && touched.number && (
                                    <div
                                        style={{
                                            color: "#dc3545",
                                            fontSize: "0.875rem",
                                            marginTop: "0.25rem",
                                        }}
                                    >
                                        {errors.number}
                                    </div>
                                )}
                            </Form.Group>
    
                            <Form.Group className="mb-3">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className={`form-control ${
                                        errors.password && touched.password ? "is-invalid" : ""
                                    }`}
                                    style={{
                                        borderColor: errors.password && touched.password ? "#dc3545" : "",
                                    }}
                                />
                                {errors.password && touched.password && (
                                    <div
                                        style={{
                                            color: "#dc3545",
                                            fontSize: "0.875rem",
                                            marginTop: "0.25rem",
                                        }}
                                    >
                                        {errors.password}
                                    </div>
                                )}
                            </Form.Group>
    
                            <Form.Group className="mb-3">
                                <Field
                                    name="cpassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    className={`form-control ${
                                        errors.cpassword && touched.cpassword ? "is-invalid" : ""
                                    }`}
                                    style={{
                                        borderColor: errors.cpassword && touched.cpassword ? "#dc3545" : "",
                                    }}
                                />
                                {errors.cpassword && touched.cpassword && (
                                    <div
                                        style={{
                                            color: "#dc3545",
                                            fontSize: "0.875rem",
                                            marginTop: "0.25rem",
                                        }}
                                    >
                                        {errors.cpassword}
                                    </div>
                                )}
                            </Form.Group>
    
                            <div className="d-grid">
                                <button
                                    className="btn btn-danger"
                                    type="submit"
                                    style={{
                                        padding: "0.75rem",
                                        fontSize: "1rem",
                                        borderRadius: "5px",
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </FormikForm>
                    )}
                </Formik>
            </Col>
            <Col lg={4}></Col>
        </Row>
    </div>
    

    );
}

export default SignUp;
