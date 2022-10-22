import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import "./Home.css";
import {  useDispatch} from "react-redux";
import {add} from '../features/User'

import axios from "axios"

const Home = () => {
    const [data, setData] = useState([])
    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get")
        setData(response.data);
    };
    useEffect(() => {
        loadData()
    }, [])
    const deleteEmployer= (id) => {
        
        axios.delete(`http://localhost:5000/api/remove/${id}`)
        toast.success("EMPLOYER DELETE")
        setTimeout(() => loadData(), 500)
    }

   const dispatch = useDispatch()
    return (
        <div style={{ marginTop: "150px" }}>
            <Link to="/addContact">
                <button className="btn btn-contact">Add employer</button>
            </Link>

            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        <th style={{ textAlign: "center" }}>Contact</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        
                        return (
                           
                            <tr key={item.id}>
                                
                                <th scope="row">{index +1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button  className="btn btn-edit" onClick={()=>
                                        dispatch(add({name :"" , email : "" , contact: ""}))}>Edit</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => deleteEmployer(item.id)}>Delete</button>

                                    
                                    <Link to={`/view/${item.id}`}>
                                        <button className="btn btn-view" onClick={()=>
                                        dispatch(add({name :"" , email : "" , contact: ""}))}>View</button>
                                    </Link>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home;