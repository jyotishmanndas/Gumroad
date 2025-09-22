export default async function CategoryPage({ params }: { params: { category: string } }) {
    return (
        <div>
            {params.category}
        </div>
    )
}