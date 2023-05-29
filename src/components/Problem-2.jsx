import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Problem2 = () => {
    const [modelA, setModelA] = useState(false)
    const [modelB, setModelB] = useState(false)

    const onSwitch = () =>{
        setModelA(!modelA)
        setModelB(!modelB)
    }

    useEffect(()=>{
        const AxiosHeader = { headers: { "accept": "application/json", "X-CSRFToken": "BGZOYxzEQP32lCxJWKRTzIZuIzKBBNMETFXdDYX346S6fOst5kIGM94Fhjpjq9y7"} }
        
        const data = axios.get("https://contact.mediusware.com/api/contacts", AxiosHeader)
        console.log(data)
    }, [])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={() => setModelA(!modelA)} className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">All Contacts</button>
                    <button onClick={() => setModelB(!modelB)} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

            </div>

            {/* All contact */}
            <div className="modal" style={{ display: modelA ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">All Contacts</h1>
                            <button onClick={() => setModelA(!modelA)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer" style={{ justifyContent: "space-between" }}>
                            <div>
                                <button type="button" className="btn btn-primary">Select Even</button>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <button onClick={() => setModelA(!modelA)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={onSwitch} type="button" className="btn btn-primary">Switching to Model B</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* US contact */}
            <div className="modal" style={{ display: modelB ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">US Contacts</h1>
                            <button onClick={() => setModelB(!modelB)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer" style={{ justifyContent: "space-between" }}>
                            <div>
                                <button type="button" className="btn btn-primary">Select Even</button>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <button onClick={() => setModelB(!modelB)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={onSwitch} type="button" className="btn btn-primary">Switching to Model A</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;