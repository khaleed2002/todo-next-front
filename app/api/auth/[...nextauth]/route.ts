import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import customFetch from "@/utils/customFetch";
import { credentialsType } from "@/app/types";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                try {
                    const res = await customFetch.post('/auth/login', credentials as credentialsType)
                    // console.log(res);
                    const user = res?.data?.result?.user;
                    // console.log(user);

                    if (user) {
                        return user
                    } else {
                        return null
                    }
                } catch (error) {
                    // console.log(error);
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/login'
    }
})

export { handler as GET, handler as POST }