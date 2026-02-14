import { useState } from 'react'

function TodoInput({ onAdd }) {
    const [input, setInput] = useState('')
    const [isShaking, setIsShaking] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = input.trim()

        if (!text) {
            setIsShaking(true)
            setTimeout(() => setIsShaking(false), 500)
            return
        }

        onAdd(text)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                className={`flex-1 px-5 py-4 bg-surface-light border-2 border-transparent rounded-2xl text-text-primary placeholder:text-text-secondary outline-none transition-all duration-300 shadow-inner focus:border-primary focus:shadow-glow focus:-translate-y-0.5 ${isShaking ? 'animate-shake' : ''
                    }`}
            />
            <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-br from-primary to-secondary text-white font-semibold rounded-2xl shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-glow-strong hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group"
            >
                <span className="relative z-10 flex items-center gap-2">
                    <span>Add</span>
                    <span className="text-xl transition-transform duration-300 group-hover:rotate-90">+</span>
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-[3] transition-transform duration-500"></div>
            </button>
        </form>
    )
}

export default TodoInput
