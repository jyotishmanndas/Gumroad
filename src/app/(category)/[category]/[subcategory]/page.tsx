export default function subcategoryPage({ params }: { params: { category: string, subcategory: string } }) {
    return (
        <div>
            {params.category}
            {params.subcategory}
        </div>
    )
}