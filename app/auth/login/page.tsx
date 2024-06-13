
import { NextPage } from 'next';
import Form from './form';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Login: NextPage = async () => {
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

export default Login;