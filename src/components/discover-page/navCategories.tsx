"use client";

import { cn } from "@/lib/utils";
import { useState } from "react"
import { Button } from "../ui/button";
import Link from "next/link";

interface navCategoriesProps {
    category: any
}

export function NavCategories({ category }: navCategoriesProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <nav className="bg-transparent">
            <div className="flex items-center relative">
                {category.map((category: any) => (
                    <div
                        key={category.name}
                        className="relative group"
                        onMouseEnter={() => setActiveCategory(category.name)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        <Button variant="elevated" className={cn(
                            "h-11 bg-transparent px-4 border-transparent rounded-full hover:border-neutral-500 hover:bg-black",
                            activeCategory === category.name && "bg-black border-neutral-500 shadow-[4px_4px_0px_0px_rgba(255,255,255)] -translate-x-[4px] -translate-y-[4px]"
                        )}>
                            <Link href={`/${category.slug}`}>
                                {category.name}
                            </Link>
                        </Button>

                        {/* Dropdown */}
                        {category.subcategories && category.subcategories.length > 0 && (
                            <div
                                className={cn(
                                    "absolute top-full left-0 mt-2 w-48 border rounded-md z-50 transition-all duration-200 transform",
                                    activeCategory === category.name
                                        ? "opacity-100 shadow-[4px_4px_0px_0px_rgba(255,255,255)] -translate-x-[4px] -translate-y-[4px] visible"
                                        : "opacity-0 -translate-y-2 invisible",
                                )}
                                style={{
                                    backgroundColor: `${category.color}`
                                }}
                            >
                                <div className="">
                                    {category.subcategories?.map((subcategory: any) => (
                                        <Link
                                            key={subcategory.slug}
                                            href={`/${category.slug}/${subcategory.slug}`}
                                            className="block px-4 py-3 text-md text-foreground hover:bg-neutral-200 hover:text-accent-foreground transition-colors duration-150"
                                        >
                                            {subcategory.slug}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    )
}