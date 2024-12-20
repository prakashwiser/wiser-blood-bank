import React from 'react';
import { Table } from 'react-bootstrap';
import Div from './Div';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Tables({ tableHeading = 'Unknown Table', data, userData }) {
    const navigator = useNavigate()
    if (!data || data.length === 0) return <div>No data available</div>;
    const keys = Object.keys(data[0]);
    return (
        <>
            <Div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 className='py-3 footer-logo text-danger fw700 fs-4'>{tableHeading}</h3>
                {userData && (
                    <button onClick={() => navigator("/adddonor/2")} className="btn animated-border-btn">
                        Add Blood
                    </button>
                )}
                {tableHeading === "All Donor Details" &&
                    <button className="btn animated-border-btn" onClick={() => navigator("/adddonor/1")}>
                        Add Donor
                    </button>
                }
            </Div>
            <Div className="table-responsive">
                <Table striped bordered hover size="sm" className='text-center capitalize'>
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
                                <td>{index + 1}</td>
                                {keys.map((key) => (
                                    <td key={`${index}-${key}`}>{item[key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Div>
        </>
    );
}

Tables.propTypes = {
    tableHeading: PropTypes.string,
    data: PropTypes.array.isRequired,
    userData: PropTypes.object,
};

export default Tables;
