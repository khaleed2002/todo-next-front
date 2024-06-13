import customFetch from "@/utils/customFetch";
import { NextResponse } from "next/server";
import { z } from "zod";
export async function POST(req: Request) {
    const registerSchema = z.object({
        name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
            .regex(/[0-9]/, { message: "Password must contain at least one number" })
            .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
    });

    try {
        const { name, email, password } = await req.json()
        // validation
        const registerData = { name, email, password }

        const validationResult = registerSchema.safeParse(registerData);
        if (validationResult.success) {
            // console.log(registerData);
            try {
                const response = await customFetch.post('/auth/register', registerData)
                return NextResponse.json({ registerData, message: 'success' }, { status: 201 });

            } catch (error) {
                const errorMsg = (error as any)?.response?.data?.message
                return NextResponse.json({ error: [errorMsg] }, { status: 400 });
            }
        } else {
            const validationErrorMsg = validationResult.error.errors.map((err) => err.message)
            return NextResponse.json({ error: validationErrorMsg }, { status: 400 });
        }
    }
    catch (error) {
        return NextResponse.json({ error: [error], message: 'failed' }, { status: 400 });
    }
}