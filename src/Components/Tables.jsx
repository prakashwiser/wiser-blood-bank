import React from 'react'
import Div from './Div'
import { Table } from 'react-bootstrap'


function Tables() {
    return (
        <>
            <Div style={{ textAlign: 'center', color: 'red' }} className='fs-2'>Donor Details</Div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Tables