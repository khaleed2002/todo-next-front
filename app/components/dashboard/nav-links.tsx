'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const links = [
    { name: 'Home', href: '/dashboard' },
    {
        name: 'Tasks',
        href: '/dashboard/tasks',
    },
    { name: 'Completed Tasks', href: '/dashboard/completed-tasks' },
];

export default function NavLinks() {

    const pathName = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathName === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
