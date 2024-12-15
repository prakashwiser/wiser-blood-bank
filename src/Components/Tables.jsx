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

                    {data && data.map((item, index, keys) => {
                        return (<tr key={index}> key='1'
                            <td>{index + 1}</td>
                            {keys.map(items =>
                                <td>{items}</td>
                            )}
                            {/* {item.name && <td>{item?.name}</td>}
                        {item.age && <td>{item?.age}</td>}
                        {item.profession && <td>{item?.profession}</td>}
                        {item.city && <td>{item?.city}</td>}
                        {item.state && <td>{item?.state}</td>}
                        {item.country && <td>{item?.country}</td>} */}
                        </tr>)
                    }


                    )}
                </tbody>
            </Table>
        </>
    )
}

export default Tables