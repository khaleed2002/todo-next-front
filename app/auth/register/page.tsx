import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";
const RegisterPage = async () => {
    const session = await getServerSession()
    if (session) {
        redirect('/dashboard')
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <Form />
        </div>
    );
};

export default RegisterPage;