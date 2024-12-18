import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Mail({ values}) {
    const navigate = useNavigate();
    const value = [
        {email: 'sahcvb@gmail.com'},
    ]
    // Function to fetch data and update user details
    const getFunction = async () => {
        try {
            console.log('inside');
            
            // Fetch data from the API
            const response = await axios.get('https://67593faf60576a194d140245.mockapi.io/Donor');
            const data = response.data
            await console.log('Response data:', response.data);

            // Find the existing user by email
            const existingUser = await data.find(user => user.email === value.email);
            await console.log('Existing user:', existingUser);
            console.log('test');
            
            if (existingUser) {
                // Update user details
                await axios.put(`https://67593faf60576a194d140245.mockapi.io/Donor/${existingUser.id}`, {
                    name: values.name,
                    email: values.email,
                    number: values.number,
                    password: values.password,
                    userValidate: 'yes', // Changed to 'yes' as per logic
                });
                console.log('User updated successfully');

                // Reset the form and navigate
                navigate('/home');
            } else {
                alert('User not found!');
            }
        } catch (error) {
            console.log('Error during form submission:', error);
            alert('An error occurred while submitting the form. Please try again later.');
        }
        if (!existingUser) {
            console.error('User not found with email:', values.email);
            alert('No user found with the provided email.');
            return;
        }
        
    };

    useEffect(() => {
        // Call getFunction on component mount
        getFunction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Dependency array ensures this runs only once

    return null; // No UI to render
}

export default Mail;
