import React, { useState } from "react"
import toast from "react-hot-toast";
import RegisterForm from '../../components/forms/authenticate/RegisterForm';

function RegisterUser(props)
{
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        age: "",
        email: "",
        password: "",

    })

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    const handleSubmit = async (e) =>
    {
        const url = `https://localhost:7083/api/Auth/register`

        const request = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        })


        if (!request.ok)
        {
            toast.error("Hiba a kapcsolatban!")
            return
        }

        const response = await request.json()

        if (request.status === 201)
        {
            toast.success(response.message)
            
        }
        else
        {
            toast.error("Hiba a beszúrás során!")
            e.preventDefault()
        }


    }
    return (
        <>
            <RegisterForm
                {...props}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default RegisterUser