import React, { useState } from "react"
import toast from "react-hot-toast";
import { jwtDecode } from 'jwt-decode';
import LoginForm from '../../components/forms/authenticate/LoginForm';

function LoginUser(props)
{
    const [formData, setFormData] = useState({
        username: "",
        password: ""

    })

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = async (e) =>
    {
        const url = `https://localhost:7083/api/Auth/login`

        e.preventDefault();

        const request = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })

        if (!request.ok)
        {
            toast.error("Hiba a kapcsolatban!")
            return
        }

        const respone = await request.json();

        respone.token !== "" ? toast.success("Sikeres azonosítás.") : toast.error("Hiba az adatokban!")

        localStorage.setItem("token", respone.token)

        console.log(jwtDecode(respone.token))

    }
    return (
        <>
            <LoginForm
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default LoginUser