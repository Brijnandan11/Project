import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete, currentFilter }) {
    const getEmptyState = () => {
        const states = {
            all: { icon: '📝', text: 'No tasks yet. Add one to get started!' },
            active: { icon: '✨', text: "No active tasks. You're all caught up!" },
            completed: { icon: '🎉', text: 'No completed tasks yet. Keep going!' }
        }
        return states[currentFilter]
    }

    if (todos.length === 0) {
        const emptyState = getEmptyState()
        return (
            <div className="text-center py-16 min-h-[200px] flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 opacity-30 animate-float">
                    {emptyState.icon}
                </div>
                <p className="text-text-secondary text-lg font-light">
                    {emptyState.text}
                </p>
            </div>
        )
    }

    return (
        <ul className="space-y-3 mb-6 min-h-[200px]">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default TodoList
