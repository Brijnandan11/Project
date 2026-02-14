function FilterTabs({ currentFilter, onFilterChange }) {
    const filters = [
        { id: 'all', label: 'All' },
        { id: 'active', label: 'Active' },
        { id: 'completed', label: 'Completed' }
    ]

    return (
        <div className="flex gap-2 mb-6 p-1.5 bg-surface-light rounded-xl">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    className={`flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${currentFilter === filter.id
                            ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 -translate-y-0.5'
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}

export default FilterTabs
