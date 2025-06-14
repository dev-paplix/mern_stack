import React, { useState, useEffect }  from 'react';


const BACKEND_URI = "http://localhost:5000/api";



    const getEmployees = async () => {

        try {
            const response = await fetch(`${BACKEND_URI}/users`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            });
            if (!response.ok) throw new Error('failed');
            const data = await response.json();
            return data;
        }
        catch (err) {
            setError(err.message);
        }
    };



export default getEmployees ;

