import React, { useState } from 'react';
import banner from "../assets/contact-image.jpg";
import Div from '../Components/Div';
import emailjs from 'emailjs-com';
import '../App.css';

const banners = {
  backgroundImage: `url(${banner})`, 
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "auto",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);  


    emailjs.send(
      'service_nnchh2o',  
      'template_5rml2xpa', 
      formData,  
      'GzaBANnJUmYLfB0aj'
    )

    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent!');
      setFormData({
        name: '',
        email: '',
        number: '',
        message: ''
      }); 
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message');
    })
    .finally(() => {
      setIsSubmitting(false); 
    });
  };

  return (
    <Div style={banners}>
      <Div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form} >
          <h2 style={styles.formTitle}>Contact Us</h2>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Phone-Number</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            />
          </div>
          <button 
            type="submit" 
            style={styles.button} 
            className='bg-danger' 
            disabled={isSubmitting} 
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </Div>
    </Div>
  );
}

const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
  },
  form: {
    width: '100%',
    maxWidth: '430px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
    boxSizing: 'border-box',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5rem',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#218838',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', 
  },
};

export default Contact;
