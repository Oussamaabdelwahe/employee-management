import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom"
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const initialState = {
    name: "",
    email: "",
    contact: ""
}
const AddEdit = () => {
    const [state, setState] = useState(initialState)
    const { name, email, contact } = state;
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${id}`)
            .then((resp) => setState({ ...resp.data[0] }))

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("please provide value")

        } else {
            if (!id) {
                axios.post("http://localhost:5000/api/post", {
                    name,
                    email,
                    contact,
                })
                    .then(() => {
                        setState({ name: "", email: "", contact: "" })
                    })
                    .catch((err) => toast.error(err.response.data))
                toast.success("employer Added success")
            } else {
                axios.put(`http://localhost:5000/api/put/${id}`, {
                    name,
                    email,
                    contact,
                })
                    .then(() => {
                        setState({ name: "", email: "", contact: "" })
                    })
                    .catch((err) => toast.error(err.response.data))
                toast.success("employer UPDATE success")

            }
            setTimeout(() => navigate.push("/"), 500)
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const data= useSelector((state)=>state.user.value)



    return (
        <div style={{ marginTop: "100px" }}>
            <form style={
                {
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center"
                }}
                onSubmit={handleSubmit}

            >
                <label htmlFor="name">Name:{data.name}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" Name .."
                    value={name || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="email">Email:{data.email}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" Email .."
                    value={email || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="contact">Contact:{data.contact}</label>
                <input
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder=" contact .."
                    value={contact || ""}
                    onChange={handleInputChange}
                />
                <input type="submit" value={id ? "update" : "save"} />
                <Link to="/">
                    <input type="buttom" value="Go back" />
                </Link>

            </form>


        </div>
    )
}
export default AddEdit