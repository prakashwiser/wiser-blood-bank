import React from 'react'
import Navbars from '../Components/Navbar'
import Image from '../Components/Image'
import Tables from '../Components/Tables'
import Div from '../Components/Div'


const banner = 'https://cdn.britannica.com/32/191732-050-5320356D/Human-red-blood-cells.jpg'
const bannerStyle = {
    height: '400px', width: '100%'
}
function Home() {
    return (
        <>
            <Navbars />
            <Image src={banner} alt='banner' style={bannerStyle} />
            <Div className='container'>
                <Tables />
            </Div>

        </>
    )
}

export default Home