import customFetch from "@/utils/customFetch";
import { NextResponse } from "next/server";
import { z } from "zod";
export async function POST(req: Request) {
    console.log('hello');

    const otpSchema = z.object({
        otp: z.string().length(6, { message: "OTP must be 6 characters long" }),
    });

    try {
        const { email, otp } = await req.json()
        // validation
        const otpData = { email, otp }

        const validationResult = otpSchema.safeParse(otpData);
        if (validationResult.success) {
            try {
                const response = await customFetch.post('/auth/verify-email', otpData)
                // console.log(response);
                return NextResponse.json({ message: 'success' }, { status: 201 });
            } catch (error) {
                // console.log(error);
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