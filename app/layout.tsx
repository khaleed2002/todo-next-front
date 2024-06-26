import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/auth/Provider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const serverSession = await getServerSession()
  return (
    <html lang="en">

      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>

    </html>
  );
}
// Route handler || server action