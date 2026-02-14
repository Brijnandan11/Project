function TodoStats({ activeCount, onClearCompleted }) {
    return (
        <div className="flex justify-between items-center pt-5 border-t border-white/5">
            <span className="text-text-secondary text-sm font-mono">
                {activeCount} {activeCount === 1 ? 'task' : 'tasks'}
            </span>
            <button
                onClick={onClearCompleted}
                className="px-4 py-2 border border-text-secondary text-text-secondary rounded-lg text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 active:translate-y-0"
            >
                Clear completed
            </button>
        </div>
    )
}

export default TodoStats
