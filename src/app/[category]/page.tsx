import { DiscoverNavbar } from "@/components/discover-page/navbar";
import { prisma } from "@/lib/db";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categoryColor = await prisma.category.findUnique({
        where: { slug: params.category },
        select: { color: true }
    });

    return (
        <div className="min-h-screen flex flex-col bg-[#242423] overflow-hidden">
            <DiscoverNavbar categoryColor={categoryColor?.color} />
        </div>
    )
}