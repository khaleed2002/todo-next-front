'use client'
import Input from "@/app/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Form() {
    const [error, setError] = useState<null | string>(null);
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        const response = await signIn('credentials', { ...data, redirect: false })
        // console.log(response);
        if (!response?.error) {
            setError(null)
            router.push('/dashboard')
            router.refresh()
        } else {
            setError('user or password is incorrect!')
        }

    }
    return (
        <form className="w-96 p-6 bg-white rounded shadow" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <Input label="Email" type="email" name="email" />
            <Input label="Password" type="password" name="password" />
            {error === null ? "" : <div className=" text-sm text-red-800">{error}</div>}
            <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
                type="submit"
            >
                Login
            </button>
            <p className="mt-4 text-center text-gray-600">
                Not registered yet?{' '}
                <Link href="/auth/register" className="text-blue-500 hover:text-blue-700">
                    Register
                </Link>
            </p>
        </form>
    )
}