import React from 'react'
import { Table } from 'react-bootstrap'

function Tables({ tableHeading = 'Unknown Table', data }) {
    if (!data || data.length === 0) return <div>No data available</div>;
    const keys = Object.keys(data[0]);

    return (
        <>
            <h3 className='py-3'>{tableHeading}</h3>
            <Table striped bordered style={{textTransform:"capitalize"}} hover size="sm" className='text-center capliatize'>
                <thead>
                    <tr>
                        <th>No</th>
                        {keys.map((key, index) => (
                            <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td >{index + 1}</td>
                            {keys.map((key, subIndex) => (
                                <td key={subIndex}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tables