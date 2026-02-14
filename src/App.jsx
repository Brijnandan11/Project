import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import FilterTabs from './components/FilterTabs'
import TodoStats from './components/TodoStats'
import FloatingShapes from './components/FloatingShapes'

function App() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('all')

    // Load todos from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('todos')
        if (stored) {
            setTodos(JSON.parse(stored))
        }
    }, [])

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date().toISOString()
        }
        setTodos([newTodo, ...todos])
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    const getFilteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(t => !t.completed)
            case 'completed':
                return todos.filter(t => t.completed)
            default:
                return todos
        }
    }

    const activeTodoCount = todos.filter(t => !t.completed).length

    return (
        <>
            <div className="background-gradient"></div>
            <FloatingShapes />

            <div className="min-h-screen flex items-center justify-center px-5 py-10">
                <div className="w-full max-w-2xl">
                    {/* Header */}
                    <header className="text-center mb-12 perspective-1000">
                        <h1 className="text-6xl md:text-7xl font-bold mb-3 flex items-center justify-center gap-4">
                            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                                Todo
                            </span>
                            <span className="text-accent font-light italic">List</span>
                        </h1>
                        <p className="text-text-secondary text-sm tracking-[0.2em] uppercase font-light">
                            Organize your future
                        </p>
                    </header>

                    {/* Main Todo Container */}
                    <div className="bg-surface rounded-3xl p-6 md:p-8 shadow-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-glow-strong hover:-translate-y-1 preserve-3d">
                        <TodoInput onAdd={addTodo} />
                        <FilterTabs currentFilter={filter} onFilterChange={setFilter} />
                        <TodoList
                            todos={getFilteredTodos()}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                            currentFilter={filter}
                        />
                        <TodoStats
                            activeCount={activeTodoCount}
                            onClearCompleted={clearCompleted}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
