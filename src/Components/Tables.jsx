import React from 'react'
import Div from './Div'
import { Table } from 'react-bootstrap'


function Tables({ tableHeading = 'unknown table', data }) {
    const dataKey = data[0]
    const keys = Object.keys(dataKey); // [key1, key2, key3]

    return (
        <>
            <Div style={{ textAlign: 'center', color: 'red' }} className='fs-2'>{tableHeading}</Div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr key='1'>
                        <th>#</th>
                        {keys.map(item =>
                            <th>{item}</th>
                        )}
                        {/* 
                        <th>name</th>
                        <th>City</th>
                        <th>Profession</th> */}
                    </tr>
                </thead>
                <tbody>

                    {data && data.map((item, index, keys) =>
                        <tr>
                            <td>{index+1}</td>
                            {item.name && <td>{item?.name}</td>}
                            {item.age && <td>{item?.age}</td>}
                            {item.profession && <td>{item?.profession}</td>}
                            {item.city && <td>{item?.city}</td>}
                            {item.state && <td>{item?.state}</td>}
                            {item.country && <td>{item?.country}</td>}
                            {item.a && <td>{item?.a}</td>}
                            {item.b && <td>{item?.b}</td>}
                            {item.o && <td>{item?.o}</td>}
                            {item.ab && <td>{item?.ab}</td>}
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default Tables