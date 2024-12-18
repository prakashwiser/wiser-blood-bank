
// import axios from 'axios';
// import React, { useState } from 'react';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import { useNavigate } from 'react-router-dom';
// import { FaUserCircle } from "react-icons/fa";
// function SignUp() {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [number, setNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const [cpassword, setCpassword] = useState('');


//     const handleSubmit = () => {
//         if (password === cpassword) {
//             navigate('/home');
//         }
//     }
//     const apidata = async (e) => {
//         e.preventDefault();

//         if (password !== cpassword) {
//             alert("wrong password")
//             return;
//         }
//         try {

//             await axios.post('https://67593faf60576a194d140245.mockapi.io/Donor', {
//                 name,
//                 email,
//                 number,
//                 password,
//             });

//             setName('');
//             setEmail('');
//             setNumber('');
//             setPassword('');
//             setCpassword('');

//         } catch (err) {
//             alert(Error)
//         }
//     };
//     return (
//         <div className="p-5 bgimage">
//             <div className='fs-1 fw-bold text-center py-lg-3 font'> Blood Bank</div>
//             <Row>
//                 <Col lg={4}></Col>
//                 <Col lg={4}>
//                     <Form onSubmit={apidata} className='signup margin'>
//                         <div className='fs1 fw-bold  text-center text-white'><FaUserCircle /></div>
//                         <div className="fs-3 fw-bold mb-4  text-center text-white">Sign Up</div>
//                         <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4 " controlId="formPlaintextName">
//                             <Col sm="12">
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </Col>
//                         </Form.Group>
//                         <Form.Group as={Row} className="mb-3 py-lg-3  my-md-4" controlId="formPlaintextEmail">
//                             <Col sm="12">
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </Col>
//                         </Form.Group>
//                         <Form.Group as={Row} className="mb-3 py-lg-3  my-md-4" controlId="formPlaintextNumber">
//                             <Col sm="12">
//                                 <Form.Control
//                                     type="number"
//                                     placeholder="Number"
//                                     value={number}
//                                     onChange={(e) => setNumber(e.target.value)}
//                                     required
//                                 />
//                             </Col>
//                         </Form.Group>
//                         <Form.Group as={Row} className="mb-3 py-lg-3  my-md-4" controlId="formPlaintextPassword">
//                             <Col sm="12">
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </Col>
//                         </Form.Group>
//                         <Form.Group as={Row} className="mb-3 py-lg-3  my-md-4" controlId="formPlaintextCPassword">
//                             <Col sm="12">
//                                 <Form.Control
//                                     type="password"
//                                     placeholder="Confirm Password"
//                                     value={cpassword}
//                                     onChange={(e) => setCpassword(e.target.value)}
//                                     required
//                                 />
//                             </Col>
//                         </Form.Group>
//                         <div className="d-flex justify-content-center">
//                             <button
//                                 onClick={handleSubmit}
//                                 className="btn btn-warning"
//                                 type="submit"
//                                 disabled={!(password && cpassword)}
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </Form>
//                 </Col>
//                 <Col lg={4}></Col>
//             </Row>
//         </div>
//     );
// }

// export default SignUp;

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


const adminEmail = "azarudeendanish@gmail.com"; // Replace with your static admin email.

function SignUp() {
    const navigate = useNavigate();

    // emailjs.init('m4PILZ5HjxJt37hVX'); // Replace with your actual EmailJS user ID.


    const validationSchema = Yup.object({
        // name: Yup.string()
        //     .matches(/^[A-Za-z\s ]+$/, 'Name must contain only letters and spaces')
        //     .min(2, 'Minimum 2 characters')
        //     .max(15, 'Maximum 15 characters')
        //     .required('Name is required'),
        // email: Yup.string()
        //     .email('Invalid email address')
        //     .required('Email is required'),
        // number: Yup.string()
        //     .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
        //     .required('Phone number is required'),
        // password: Yup.string()
        //     .matches(
        //         /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/,
        //         'Password must have one uppercase letter, one symbol, and be 6-20 characters long'
        //     )
        //     .required('Password is required'),
        // cpassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm Password is required'),
    });

    const handleFormSubmit = async (values, { resetForm, setFieldError }) => {
        console.log('after submit for : ', values);

        try {
            // Check if the email already exists (if needed).
            // const response = await axios.get('https://67593faf60576a194d140245.mockapi.io/Donor');
            // const existingUser = response.data.find(user => user.email === values.email);

            // if (existingUser) {
            //     setFieldError('email', 'This email is already registered. Please use a different email.');
            //     return;
            // }

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

            console.log('withId:', UpdateExistingUser);

            let updateValues = { ...UpdateExistingUser, link: `http://localhost:5173/mail/${UpdateExistingUser.id}`, adminEmail, adminLink: `http://localhost:5173/admin/${UpdateExistingUser.id}` };

            console.log('link added -> ', updateValues);


            // Send email to the user.
            try {
                await emailjs.send('service_p8uoogm', 'template_951ocpd', updateValues, 'm4PILZ5HjxJt37hVX');
                console.log('user Emails sent successfully!');
            } catch (e) {
                console.log(e);

            }

            try {
                await emailjs.send('service_p8uoogm', 'template_11t1xvd', updateValues, 'm4PILZ5HjxJt37hVX');
                console.log('admin Emails sent successfully!');
            } catch (e) {
                console.log(e);

            }
            // updateValues = {...updateValues, adminEmail}
            // console.log('admin email added => ',updateValues);

            // Send email to the admin.

            console.log('Emails sent successfully!');

            // Save user details in the database.


            // const userId =  userResponse.data.id;
            // console.log(userId);

            // Update user validation status to "yes".
            // await axios.put(`https://67593faf60576a194d140245.mockapi.io/Donor/${userId}`, {
            //     userValidate: 'yes',
            // });

            // Reset form and navigate to the home page.
            // resetForm();
            navigate('/home');
        } catch (error) {
            console.error('Error during form submission:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
    };

    return (
        <div className="p-5 bgimage">
            <div className="fs-1 fw-bold text-center py-lg-3 font">Blood Bank</div>
            <Row>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            number: '',
                            password: '',
                            cpassword: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ errors, touched }) => (
                            <FormikForm className="signup pulsing-border">
                                <div className="fs1 fw-bold text-center text-white">
                                    <FaUserCircle />
                                </div>
                                <div className="fs-3 fw-bold mb-4 text-center text-white">Sign Up</div>

                                <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="name"
                                            type="text"
                                            id="name"
                                            placeholder="Name"
                                            className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                                        />
                                        {errors.name && touched.name && (
                                            <div className="custom-error">{errors.name}</div>
                                        )}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 py-lg-2 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="custom-error">{errors.email}</div>
                                        )}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 py-lg-2 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="number"
                                            type="text"
                                            placeholder="Number"
                                            className={`form-control ${errors.number && touched.number ? 'is-invalid' : ''}`}
                                        />
                                        {errors.number && touched.number && (
                                            <div className="custom-error">{errors.number}</div>
                                        )}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 py-lg-2 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                        />
                                        {errors.password && touched.password && (
                                            <div className="custom-error">{errors.password}</div>
                                        )}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 py-lg-2 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="cpassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                            className={`form-control ${errors.cpassword && touched.cpassword ? 'is-invalid' : ''}`}
                                        />
                                        {errors.cpassword && touched.cpassword && (
                                            <div className="custom-error">{errors.cpassword}</div>
                                        )}
                                    </Col>
                                </Form.Group>

                                <div className="d-flex justify-content-center">
                                    <button className="btn" type="submit">
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
