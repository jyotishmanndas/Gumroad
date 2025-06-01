import Link from "next/link";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
import { NavItems } from "./navItems";
import { Button } from "../ui/button";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export function Navbar() {

    return (
        <nav className="flex h-20 bg-black items-center justify-between">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn(
                    "text-4xl font-bold text-white",
                    poppins.className
                )}>
                    GUMROAD
                </span>
            </Link>

            <NavItems />
        </nav>
    )
}