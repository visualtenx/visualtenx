"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            // console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/dashboard");
        } catch (error: any) {
            // console.log("Login failed", error.message);
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center bg-black">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col  p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">{loading ? "Processing" : "Login"}</h1>

                            <Image src="/img/logo.jpeg" width={50} height={0} className='w-30 inline rounded-lg' alt="visualtenx logo" />
                        </div>
                        <hr />

                        <label htmlFor="email">email</label>
                        <input
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="email"
                        />
                        <label htmlFor="password">password</label>
                        <input
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="password"
                        />
                        <button
                            onClick={onLogin}
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"  >Login here</button>
                        {/* <Link href="/signup">Visit Signup page</Link> */}
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account?
                            <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

}