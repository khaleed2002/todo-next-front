'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link"
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Form() {

    const router = useRouter();

    const [error, setError] = useState(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        try {
            const response = await axios.post('/api/auth/register', data)
            setError(null)
            router.push(`/auth/register/validate-email?email=${encodeURIComponent(data?.email as string)}`);
        } catch (error) {
            setError((error as any)?.response?.data?.error)
        }
    }
    return (
        <form className="w-96 p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Register User</h2>
            <Input label="Name" type="text" name="name" />
            <Input label="Email" type="email" name="email" />
            <Input label="Password" type="password" name="password" />
            {error === null ? "" : (error as any)?.map((err: string, index: number) => {
                return <div key={index} className=" text-sm text-red-600 font-medium">{err}</div>;
            })}

            <Button type="submit">Register</Button>

            <p className="mt-4 text-center text-gray-600">
                Already a user?{' '}
                <Link href="/auth/login" className="text-blue-500 hover:text-blue-700">
                    Login
                </Link>
            </p>
        </form>
    )
}