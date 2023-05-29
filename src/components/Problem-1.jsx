import React, {useState} from 'react';
import { useRef } from 'react';

const Problem1 = () => {
    let nameRef, statusRef  = useRef()
    let [data, setData] = useState([])
    const [show, setShow] = useState('all');
    const onSubmit = (e) =>{
        e.preventDefault()
        setData([...data, {name: nameRef.value, status: statusRef.value}])
    }
    const handleClick = (val) =>{
        setShow(val)
    }

    let filter = data.filter((item)=>{
        if(show==='active') return item.status==='active'
        else if(show==='completed') return item.status==='completed'
        else return item;
    })

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={onSubmit}>
                        <div className="col-auto">
                            <input ref={(i)=>nameRef=i} type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input ref={(i)=>statusRef=i} type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filter.map((item, i)=>
                            <tr key={i}>
                                <td scope="col">{item.name}</td>
                                <td scope="col">{item.status}</td>
                            </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;