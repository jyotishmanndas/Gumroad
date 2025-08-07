import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export function DiscoverNavbar() {
    return (
        <header className="py-9 px-16 bg-transparent flex items-center justify-center border-b border-[#edecec8c]">
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
                            <ShoppingCart size={18} />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[#DDDDDD] hover:">
                    <p>All</p>
                    <p>Design</p>
                    <p>3D</p>
                    <p>Music</p>
                    <p>Films</p>
                </div>
            </div>
        </header>
    )
}