import React from 'react';
import { Link } from 'react-router-dom';
import Div from './Div';

const NotFound = () => {
  return (
    <Div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </Div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    color: '#333',
    margin: 0,
  },
  title: {
    fontSize: '10rem',
    margin: 0,
    color: '#ff6f61',
  },
  message: {
    fontSize: '1.5rem',
    margin: '10px 0 20px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#ff6f61',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#e65a50',
  },
};

export default NotFound;
