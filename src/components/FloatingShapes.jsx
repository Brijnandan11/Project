import { useEffect, useRef } from 'react'

function FloatingShapes() {
    const shapesRef = useRef([])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX / window.innerWidth
            const mouseY = e.clientY / window.innerHeight

            shapesRef.current.forEach((shape, index) => {
                if (shape) {
                    const speed = (index + 1) * 20
                    const x = (mouseX - 0.5) * speed
                    const y = (mouseY - 0.5) * speed
                    shape.style.transform = `translate(${x}px, ${y}px)`
                }
            })
        }

        document.addEventListener('mousemove', handleMouseMove)
        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="floating-shapes">
            <div ref={el => shapesRef.current[0] = el} className="shape shape-1"></div>
            <div ref={el => shapesRef.current[1] = el} className="shape shape-2"></div>
            <div ref={el => shapesRef.current[2] = el} className="shape shape-3"></div>
        </div>
    )
}

export default FloatingShapes
