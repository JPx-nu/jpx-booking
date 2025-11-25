interface PriceItem {
    name: string;
    price: string;
    description?: string;
}

interface PriceCategoryProps {
    title: string;
    items: PriceItem[];
    id?: string;
}

export const PriceList = ({ title, items, id }: PriceCategoryProps) => {
    return (
        <div id={id} className="scroll-mt-24 mb-12">
            <h3 className="text-2xl font-serif font-bold text-[var(--foreground)] mb-6 border-b border-[var(--primary)] pb-2 inline-block">
                {title}
            </h3>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-baseline group hover:bg-[var(--muted)] p-2 rounded-lg transition-colors -mx-2">
                        <div className="flex-1 pr-8">
                            <h4 className="font-medium text-lg text-gray-800 group-hover:text-[var(--primary)] transition-colors">
                                {item.name}
                            </h4>
                            {item.description && (
                                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            )}
                        </div>
                        <div className="text-lg font-bold text-[var(--foreground)] whitespace-nowrap">
                            {item.price}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
