import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbars from '../Components/Navbar'
import Div from '../Components/Div'
function Profile() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        let data = localStorage.getItem('userData')
        setUserData(data)
    }, [])
    const handleClick = () => {
        localStorage.removeItem('userData')
        navigate('/')
    }
    return (
        <>
            <Navbars />
            <Div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Profile</div>
                <button onClick={handleClick}>Logout</button>
            </Div>
        </>
    )
}

export default Profile