import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { prisma } from "@/lib/db";
import { NavCategories } from "./navCategories";

export async function DiscoverNavbar() {
    const category = await prisma.category.findMany({
        include: {
            subcategories: true
        }
    });

    return (
        <header className="py-8 px-14 bg-transparent flex items-center justify-center border-b border-[#edecec8c]">
            <div className="flex flex-col w-full gap-4">
                <div className="flex item-center gap-3">
                    <Link href="/">
                        <span className="text-5xl font-bold text-[#DDDDDD]">
                            GUMROAD
                        </span>
                    </Link>
                    <div className="w-full">
                        <Input placeholder="search products" className="bg-black text-[#DDDDDD]" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="elevated" className="text-[#DDDDDD]">
                            Library
                        </Button>
                        <Button variant="elevated" className="text-[#DDDDDD]">
                            Start selling
                        </Button>
                        <Button variant="elevated" size="lg">
                            <ShoppingCart className="text-white" size={18} />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center text-[#DDDDDD]">
                    <NavCategories category={category} />
                </div>
            </div>
        </header>
    )
}