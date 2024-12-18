import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Mail({ values}) {
    const navigate = useNavigate();
    const value = [
        {email: 'sahcvb@gmail.com'},
    ]
    const getFunction = async () => {
        try {
            console.log('inside');      
            const response = await axios.get('https://67593faf60576a194d140245.mockapi.io/Donor');
            const data = response.data
            await console.log('Response data:', response.data);
            const existingUser = await data.find(user => user.email === value.email);
            await console.log('Existing user:', existingUser);
            console.log('test');
            
            if (existingUser) {
                await axios.put(`https://67593faf60576a194d140245.mockapi.io/Donor/${existingUser.id}`, {
                    name: values.name,
                    email: values.email,
                    number: values.number,
                    password: values.password,
                    userValidate: 'yes', 
                });
                console.log('User updated successfully');
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
        getFunction();
    }, []); 

    return null; 
}

export default Mail;
