import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Don't forget to import axios
import Navbars from '../Components/Navbar';
import Image from '../Components/Image';
import Tables from '../Components/Tables';
import Div from '../Components/Div';
import banner from "../assets/home-banner.webp";
import { toast } from 'react-toastify';

function Home() {
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : null;
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://67593f4e60576a194d140021.mockapi.io/donner");
                setData(response.data);
            } catch (error) {
                toast.error("Error: " + error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbars />
            <Image src={banner} className='img-fluid w-100' alt='banner' />
            <Div className='container'>
                <Tables tableHeading='Donor Details' data={data} userData={userData} />
                {userData && (
                    <>
                        <Tables data={data} />
                        <Tables data={data} />
                    </>
                )}
            </Div>
        </>
    );
}

export default Home;
