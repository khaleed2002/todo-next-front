import Image from "next/image";
import "@/app/global.css"
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Welcome() {

  const session = await getServerSession()
  if (session) {
    redirect('/dashboard')
  }

  return <main className="flex justify-center items-center h-screen">
    <div className="flex flex-col gap-4 items-center">
      <Image width={200} height={200} src="https://res.cloudinary.com/dooxt2sgsdooxt2sgs23233/image/upload/v1676809769/youtube/2023/february/blossom/icon_fb36u3.png" alt="welcome-image" />
      <h1 className=" text-4xl font-bold">Do you want to be more productive</h1>
      <Link className="main-btn w-full" href={'/auth/login'}>Start your journey</Link>
    </div>
  </main>
}