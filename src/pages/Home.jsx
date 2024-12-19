import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Navbars from '../Components/Navbar';
import Image from '../Components/Image';
import Tables from '../Components/Tables';
import Div from '../Components/Div';
import banner from "../assets/home-banner.webp";

function Home() {
    const [userData, setUserData] = useState(localStorage.getItem('userData'));
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://67593f4e60576a194d140021.mockapi.io/donner");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Failed to load data.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("userData in Home Component:", userData);
    }, [userData]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!data.length) {
        return <p>No data available</p>;
    }

    const lastEntry = data.at(-1);

    return (
        <>
            <Navbars />
            <Image src={banner} className='img-fluid w-100' alt='banner' />
            <Div className='container'>
                <Tables
                    tableHeading='Recent Donor Details'
                    data={[lastEntry]}
                    userData={userData}
                />
                {userData && (
                    <Tables
                        tableHeading='All Donor Details'
                        data={data}
                    />
                )}
            </Div>
        </>
    );
}

export default Home;
