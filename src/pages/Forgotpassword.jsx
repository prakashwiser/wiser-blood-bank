import React, { useState } from 'react';



const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address.');
            return;
        }
        setIsLoading(true);
        setError('');
        setMessage('');

        setTimeout(() => {
            if (email === 'user@example.com') {
                setMessage('If the email exists, you will receive a password reset link shortly.');
                setError('');
            } else {
                setError('Email not found.');
                setMessage('');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div style={Bgimg}>
            <div style={styles.container}>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            style={styles.input}
                        />
                    </div>
                    {error && <p style={styles.error}>{error}</p>}
                    {message && <p style={styles.success}>{message}</p>}
                    <button type="submit" style={styles.button} disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Request OTP'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const Bgimg = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: 'border-box',
    height: "100vh",
    backgroundImage: 'url("/public/images/Blood1.JPG")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat', 
}
const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto', 
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center',
    }
    ,
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'

    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '8px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '0.9rem',
    },
    success: {
        color: 'green',
        fontSize: '0.9rem',
    },
};



export default ForgotPasswordForm;