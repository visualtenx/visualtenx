"use client"

import React, {useState, useEffect} from "react";
import axios from "axios"

const UserProfile = ({ params }: any) => {
    const [data, setData] = useState({
        username: "",
        email: "",
    })

    useEffect(() => {
        const getUserDetails = async () => {
            const res = await axios.get('/api/users/profile')
            const userData = res.data.data

            setData({
                username:userData.username,
                email: userData.email,
            })
        }

        getUserDetails()

    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page
                <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.profile}</span>
                <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{data.email}</span>
            </p>

        </div>
    )
}



export default UserProfile