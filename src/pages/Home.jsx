import React from 'react'
import Navbars from '../Components/Navbar'
import Image from '../Components/Image'
import Tables from '../Components/Tables'
import Div from '../Components/Div'
import banner from "../assets/Donor-banner.webp";

const data = [
    { name: 'noufan', age: 20, profession: 'student' },
    { name: 'azar', age: 20, profession: 'student' },
    { name: 'john', age: 25, profession: 'developer' },
    { name: 'maria', age: 22, profession: 'designer' },
    { name: 'zara', age: 28, profession: 'teacher' },
]

const data1 = [
    { name: 'noufan', city: 'avanam' },
    { name: 'azar', city: 'avanam' },
    { name: 'john', city: 'chennai' },
    { name: 'maria', city: 'madurai' },
    { name: 'zara', city: 'coimbatore' },
]

const data2 = [
    { a: 'noufan', b: 'avanam' },
    { a: 'azar', b: 'avanam' },
    { a: 'john', b: 'chennai' },
    { a: 'maria', b: 'madurai' },
    { a: 'zara', b: 'coimbatore' },
]

function Home() {
    return (
        <>
            <Image src={banner} alt='banner' style={bannerStyle} />
            <Div className='container'>
                <Tables tableHeading='Donor Details' data={data} />
                <Tables data={data1} />
                <Tables data={data2} />
            </Div>
        </>
    )
}

export default Home