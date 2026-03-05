export function PageHeader({ title }: { title: string }) {
    return (
        <section className="container mx-auto py-20 px-4 md:px-6">
            <h1 className="text-4xl font-bold capitalize">{title}</h1>
        </section>
    );
}
