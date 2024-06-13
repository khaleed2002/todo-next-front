'use client'
import axios from "axios";
import { FormEvent, useState } from "react";
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import Input from "@/app/components/Input";

export default function OTPValidation() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const [error, setError] = useState(null);
    const router = useRouter()

    if (!email) {
        redirect('/auth/register')
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        try {
            const response = await axios.post('/api/auth/validate-email', { email, otp: formData.get('otp') })
            setError(null)
            router.push('/auth/login')
            router.refresh()
        } catch (error) {
            setError((error as any)?.response?.data?.error)
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="w-96 p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">Verify OTP</h2>
                <Input label="Enter OTP:" type="text" name="otp" />
                {error === null ? "" : (error as any)?.map((err: string, index: number) => {
                    return <div key={index} className=" text-sm text-red-600 font-medium">{err}</div>;
                })}
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    type="submit"
                >
                    Verify OTP
                </button>
            </form>
        </div>
    )
}