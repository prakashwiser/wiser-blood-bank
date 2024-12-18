
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
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { Formik, Field, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

function SignUp() {
    const navigate = useNavigate();

    // Validation schema for Formik
    const validationSchema = Yup.object({
        name: Yup.string().min(2, 'minimum 2 characters').min(10, 'maximum 10 characters').required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        number: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
            .required('Phone number is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        cpassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleFormSubmit = async (values, { resetForm }) => {
        try {
            await axios.post('https://67593faf60576a194d140245.mockapi.io/Donor', {
                name: values.name,
                email: values.email,
                number: values.number,
                password: values.password,
            });

            resetForm(); // Reset the form after successful submission
            navigate('/home'); // Navigate to the homepage
        } catch (err) {
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <div className="p-5 bgimage">
            <div className='fs-1 fw-bold text-center py-lg-3 font'>Blood Bank</div>
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
                            <FormikForm className="signup">
                                <div className='fs1 fw-bold text-center text-white'><FaUserCircle /></div>
                                <div className="fs-3 fw-bold mb-4 text-center text-white">Sign Up</div>
                                <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                                        />
                                        {errors.name && touched.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="number"
                                            type="text"
                                            placeholder="Number"
                                            className={`form-control ${errors.number && touched.number ? 'is-invalid' : ''}`}
                                        />
                                        {errors.number && touched.number && (
                                            <div className="invalid-feedback">{errors.number}</div>
                                        )}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                        />
                                        {errors.password && touched.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3 py-lg-3 my-md-4">
                                    <Col sm="12">
                                        <Field
                                            name="cpassword"
                                            type="password"
                                            placeholder="Confirm Password"
                                            className={`form-control ${errors.cpassword && touched.cpassword ? 'is-invalid' : ''}`}
                                        />
                                        {errors.cpassword && touched.cpassword && (
                                            <div className="invalid-feedback">{errors.cpassword}</div>
                                        )}
                                    </Col>
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                    <button className="btn warning" type="submit">
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

