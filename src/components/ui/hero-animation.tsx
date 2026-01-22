"use client"

import type React from "react"
import { useMemo } from "react"

interface AnimatedGridProps {
    rows?: number
    cols?: number
    cellSize?: string
    animationDuration?: string
    startColor?: [number, number, number]
    endColor?: [number, number, number]
    animationStartColor?: [number, number, number]
    animationEndColor?: [number, number, number]
    className?: string
}

export function AnimatedGrid({
    rows = 6,
    cols = 8,
    cellSize = "4rem",
    animationDuration = "2s",
    startColor = [94, 47, 70],
    endColor = [199, 82, 51],
    animationStartColor = [105, 210, 231],
    animationEndColor = [250, 105, 0],
    className = "",
}: AnimatedGridProps) {
    const totalItems = rows * cols

    // Generate grid items with calculated positions
    const gridItems = useMemo(() => {
        return Array.from({ length: totalItems }, (_, index) => {
            const row = Math.floor(index / cols)
            const col = index % cols

            // Calculate animation delay based on position
            const delay = ((col - row) / cols - 1) * Number.parseFloat(animationDuration)

            // Calculate color interpolation factor
            const k = row / rows

            return {
                index,
                row,
                col,
                delay,
                k,
            }
        })
    }, [rows, cols, totalItems, animationDuration])

    // Color interpolation function
    const interpolateColor = (color1: [number, number, number], color2: [number, number, number], k: number) => {
        const r = Math.round(k * color2[0] + (1 - k) * color1[0])
        const g = Math.round(k * color2[1] + (1 - k) * color1[1])
        const b = Math.round(k * color2[2] + (1 - k) * color1[2])
        return `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div className={`flex items-center justify-center p-4 ${className}`} >
            <div
                className="grid gap-0"
                style={{
                    gridTemplate: `repeat(${rows}, ${cellSize}) / repeat(${cols}, ${cellSize})`,
                }}
            >
                {gridItems.map(({ index, delay, k }) => {
                    const cellBackgroundColor = interpolateColor(startColor, endColor, k)
                    const animationColor1 = interpolateColor(animationStartColor, animationEndColor, k)

                    return (
                        <div
                            key={index}
                            className="relative"
                            style={
                                {
                                    backgroundColor: cellBackgroundColor,
                                    animation: `gridAnimation ${animationDuration} ease-in ${delay}s infinite alternate`,
                                    "--animation-color": animationColor1,
                                } as React.CSSProperties
                            }
                        />
                    )
                })}
            </div>

            <style jsx>{`
        @keyframes gridAnimation {
          0% {
            border-radius: 50%;
            background-color: var(--animation-color);
          }
          100% {
            border-radius: 0%;
            background-color: inherit;
          }
        }
      `}</style>
        </div>
    )
}

export default function DemoOne() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-xl">
            <AnimatedGrid
                startColor={[255, 0, 0]}
                endColor={[255, 0, 255]}
                animationStartColor={[255, 0, 0]}
                animationEndColor={[255, 0, 255]}
                rows={10}
                cols={15}
                cellSize="6rem"
                animationDuration="2s"
            />
            <span className="pointer-events-none absolute z-10 text-center text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap">
                Animated Grid
            </span>
        </div>
    )
}
