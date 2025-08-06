"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

interface NavItemsProps {
    id: number;
    name: string;
    href: string;
}

const navIems: NavItemsProps[] = [
    {
        id: 0,
        name: "Home",
        href: "/"
    },
    {
        id: 1,
        name: "Pricing",
        href: "/pricing"
    },
    {
        id: 2,
        name: "Features",
        href: "/features"
    },
    {
        id: 3,
        name: "About",
        href: "/about"
    },
    {
        id: 4,
        name: "Contact",
        href: "/contact"
    }
]

export function NavItems() {
    const pathaname = usePathname();
    return (
        <div className="flex items-center justify-center gap-2 h-full overflow-x-hidden">
            {navIems.map((item) => (
                <Link key={item.id} href={item.href} className={cn(
                    " flex items-center justify-center text-lg text-white border border-transparent hover:border-neutral-600 px-3 py-2 rounded-full transition-all",
                    pathaname === item.href ? "bg-white text-black" : "bg-transparent"
                )}>
                    {item.name}
                </Link>
            ))}

            <div className="flex items-center justify-center h-full">
                <Button asChild className="border-l border-t-0 border-b-0 border-r-0 border-neutral-600 px-10 h-full w-16 rounded-none bg-black hover:bg-white hover:text-black transition-colors text-lg ">
                    <Link href="/login">
                        Log in
                    </Link>
                </Button>
                <Button asChild className="border-l border-t-0 border-b-0 border-r-0 border-neutral-600 px-12 h-full rounded-none bg-[#FF90E8] text-black hover:bg-white hover:text-black transition-colors text-lg ">
                    <Link href="/">
                        Start selling
                    </Link>
                </Button>
            </div>
        </div>
    )
}