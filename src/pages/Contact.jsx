import React from "react";
import banner from "../assets/contact-image.jpg";
import Div from "../Components/Div";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";

const banners = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "auto",
};

const Contact = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     number: "",
  //     message: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().required("Name is required"),
  //     email: Yup.string()
  //       .email("Invalid email format")
  //       .required("Email is required"),
  //       number: Yup.string()
  //       .matches(/^\d{10}$/, "Phone number must be exactly 10 digits") 
  //       .required("Phone number is required"),
  //     message: Yup.string().required("Message is required"),
  //   }),
  //   onSubmit: (values, { setSubmitting, resetForm }) => {
  //     setSubmitting(true);
  //     emailjs
  //       .send(
  //         "service_nnchh2o",
  //         "template_5rml2xpa",
  //         values,
  //         "GzaBANnJUmYLfB0aj"
  //       )
  //       .then((response) => {
  //         console.log("SUCCESS!", response.status, response.text);
  //         alert("Message sent!");
  //         resetForm();
  //       })
  //       .catch((error) => {
  //         console.error("FAILED...", error);
  //         alert("Failed to send message");
  //       })
  //       .finally(() => {
  //         setSubmitting(false);
  //       });
  //   },
  // });

  return (
    // <Div style={banners}>
    //   <Div style={styles.formContainer}>
    //     <form onSubmit={formik.handleSubmit} style={styles.form}>
    //       <h2 style={styles.formTitle}>Contact Us</h2>

    //       <div style={styles.inputGroup}>
    //         <label>Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           value={formik.values.name}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           required
    //           style={styles.input}
    //         />
    //         {formik.touched.name && formik.errors.name ? ( 
    //           <div style={{ color: "red", fontSize: "0.9rem" }}>
    //             {formik.errors.name}
    //           </div>
    //         ) : null}
    //       </div>

    //       <div style={styles.inputGroup}>
    //         <label>Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           value={formik.values.email}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           required
    //           style={styles.input}
    //         />
    //         {formik.touched.email && formik.errors.email ? (
    //           <div style={{ color: "red", fontSize: "0.9rem" }}>
    //             {formik.errors.email}
    //           </div>
    //         ) : null}
    //       </div>

    //       <div style={styles.inputGroup}>
    //         <label>Phone-Number</label>
    //         <input
    //           type="number"
    //           name="number"
    //           value={formik.values.number}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           required
    //           style={styles.input}
    //         />
    //         {formik.touched.number && formik.errors.number ? (
    //           <div style={{ color: "red", fontSize: "0.9rem" }}>
    //             {formik.errors.number}
    //           </div>
    //         ) : null}
    //       </div>

    //       <div style={styles.inputGroup}>
    //         <label>Message</label>
    //         <textarea
    //           name="message"
    //           value={formik.values.message}
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           required
    //           style={styles.textarea}
    //         />
    //         {formik.touched.message && formik.errors.message ? (
    //           <div style={{ color: "red", fontSize: "0.9rem" }}>
    //             {formik.errors.message}
    //           </div>
    //         ) : null}
    //       </div>

    //       <button
    //         type="submit"
    //         style={styles.button}
    //         className="bg-danger"
    //         disabled={formik.isSubmitting}
    //       >
    //         {formik.isSubmitting ? "Sending..." : "Send Message"}
    //       </button>
    //     </form>
    //   </Div>
    // </Div>
    <>contact page</>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "430px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.5rem",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  textarea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
};

export default Contact;
