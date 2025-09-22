import { DiscoverNavbar } from "@/components/discover-page/navbar";
import { prisma } from "@/lib/db";

export default async function CategoryLayout({ children, params }: { children: React.ReactNode; params: { category: string } }) {
    const categoryColor = await prisma.category.findUnique({
        where: { slug: params.category },
        select: { color: true }
    });

    return (
        <div className="min-h-screen flex flex-col bg-[#242423] overflow-hidden">
            <DiscoverNavbar categoryColor={categoryColor?.color} />
            {children}
        </div>
    )
}