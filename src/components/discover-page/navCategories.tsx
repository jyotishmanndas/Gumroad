"use client";

import { categories } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { useState } from "react"
import { Button } from "../ui/button";

export function NavCategories() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    return (
        <nav className="bg-transparent shadow-sm">
            <div className="flex items-center relative">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="relative group"
                        onMouseEnter={() => setActiveCategory(category.name)}
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        <Button variant="elevated" className="h-11 bg-transparent px-4 border-transparent rounded-full hover:border-neutral-500 hover:bg-black ">
                            <span>{category.name}</span>
                        </Button>

                        {/* Dropdown */}
                        <div
                            className={cn(
                                "absolute top-full left-0 mt-2 w-48 border border-border rounded-lg shadow-lg z-50 transition-all duration-200 transform",
                                activeCategory === category.name
                                    ? "opacity-100 translate-y-0 visible"
                                    : "opacity-0 -translate-y-2 invisible",
                            )}
                            style={{
                                backgroundColor: `${category.color}`
                            }}
                        >
                            <div className="py-2">
                                {category.subcategories.map((subcategory, index) => (
                                    <a
                                        key={subcategory}
                                        href="#"
                                        className="block px-4 py-2 text-md text-foreground hover:bg-neutral-200 hover:text-accent-foreground transition-colors duration-150"
                                    >
                                        {subcategory}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </nav>
    )
}