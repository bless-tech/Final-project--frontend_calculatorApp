import React, { useState, useEffect } from 'react'
import './Button.css'
import axios from 'axios'



function Time() {
    const [current, setCurrent] = useState({});

    useEffect(() => {
        axios.get("http://api.weatherstack.com/current?access_key=d367c872f3c7ce9e5555c705434afe61&query=Accra")
            .then((res) => {
                console.log(res.data);
                setCurrent(res.data.current);
            })
            .catch((error) => {
             console.log(error)
            })
    }, []);


    return (

        <div className='bgimage2'>
           <div className="container">
                <div className="row">
                            <div className="col-md-2">
                            <h2>{current.observation_time}</h2>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Time
