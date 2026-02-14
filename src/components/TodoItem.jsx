import { useState } from 'react'

function TodoItem({ todo, onToggle, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = () => {
        setIsDeleting(true)
        setTimeout(() => {
            onDelete(todo.id)
        }, 300)
    }

    return (
        <li
            className={`bg-surface-light px-5 py-4 rounded-xl flex items-center gap-4 transition-all duration-300 border border-transparent hover:border-primary hover:translate-x-2 hover:shadow-lg hover:shadow-primary/20 preserve-3d group ${todo.completed ? 'opacity-60' : ''
                } ${isDeleting ? 'animate-slide-out' : 'animate-slide-in'}`}
        >
            {/* Checkbox */}
            <button
                onClick={() => onToggle(todo.id)}
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 hover:scale-110 hover:shadow-glow ${todo.completed
                        ? 'bg-gradient-to-br from-primary to-secondary border-secondary animate-check-pulse'
                        : 'border-primary'
                    }`}
            >
                {todo.completed && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </button>

            {/* Todo Text */}
            <span
                className={`flex-1 font-mono transition-all duration-300 ${todo.completed ? 'line-through text-text-secondary' : 'text-text-primary'
                    }`}
            >
                {todo.text}
            </span>

            {/* Delete Button */}
            <button
                onClick={handleDelete}
                className="px-3 py-1.5 border border-red-500 text-red-500 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95"
            >
                Delete
            </button>
        </li>
    )
}

export default TodoItem
