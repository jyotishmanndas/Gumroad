import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BookmarkCheckIcon, ShoppingCart } from "lucide-react";
import { prisma } from "@/lib/db";
import { NavCategories } from "./navCategories";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

interface DiscoverNavbarProps {
    categoryColor: string | undefined
}

export async function DiscoverNavbar({ categoryColor }: DiscoverNavbarProps) {
    const [category, session] = await Promise.all([
        prisma.category.findMany({
            include: {
                subcategories: true
            }
        }),
        getServerSession(authOptions)
    ]);

    return (
        <header className="py-8 px-14 bg-transparent flex items-center justify-center border-b text-[#DDDDDD]" style={{ backgroundColor: categoryColor }}>
            <div className="flex flex-col w-full gap-4">
                <div className="flex item-center gap-3">
                    <Link href="/">
                        <span className="text-5xl font-bold">
                            GUMROAD
                        </span>
                    </Link>
                    <div className="w-full">
                        <Input placeholder="search products" className="bg-black" />
                    </div>
                    <div className="flex items-center space-x-4">
                        {session ? (
                            <Button variant="elevated">
                                <BookmarkCheckIcon />
                                Library
                            </Button>
                        ) : (
                            <Button asChild variant="elevated">
                                <Link href="/login">Log in</Link>
                            </Button>
                        )}
                        <Button variant="elevated" className="bg-[#DDDDDD] text-black hover:bg-[#FF90E8]">
                            Start selling
                        </Button>
                        {session && (
                            <Button variant="elevated" size="lg" className="bg-black">
                                <ShoppingCart className="" size={18} />
                            </Button>
                        )}
                    </div>
                </div>
                <div className="flex items-center text-[#DDDDDD]">
                    <NavCategories category={category} />
                </div>
            </div>
        </header>
    )
}