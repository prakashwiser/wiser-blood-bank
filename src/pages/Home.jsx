import React from 'react'
import Navbars from '../Components/Navbar'
import Image from '../Components/Image'
import Tables from '../Components/Tables'
import Div from '../Components/Div'

const data=[
    {name: 'noufan', age: 20, profession: 'student'},
    {name: 'azar', age: 20, profession: 'student'},
]
const data1=[
    {name: 'noufan', city: 'avanam', state: 'tamil nadu', country: 'india'},
    {name: 'azar', city: 'avanam', state: 'tamil nadu', country: 'india'},
]
const data2=[
    {a: 'noufan', b: 'avanam', o: 'tamil nadu', ab: 'india'},
]
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
                <Tables tableHeading='Donor Details' data={data} />
                <Tables data={data1} />
                <Tables data={data2} />
            </Div>

        </>
    )
}

export default Home