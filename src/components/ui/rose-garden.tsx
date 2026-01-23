"use client";

import React, { useEffect, useState } from "react";
import styles from "./rose-garden.module.css";

const roseConfigs = [
    { left: 10, height: 30, roseColor: '#FF1493', delay: 0 },
    { left: 24, height: 36, roseColor: '#FF69B4', delay: 0.5 },
    { left: 40, height: 26, roseColor: '#DC143C', delay: 0.3 },
    { left: 56, height: 40, roseColor: '#FF6B6B', delay: 0.7 },
    { left: 70, height: 32, roseColor: '#FF1493', delay: 0.2 },
    { left: 84, height: 28, roseColor: '#FF69B4', delay: 0.6 },
    { left: 16, height: 20, roseColor: '#FFB6C1', delay: 0.4 },
];

function lightenColor(color: string, percent: number) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

export const RoseGarden = () => {
    const [particles, setParticles] = useState<Array<{ left: string, bottom: string, delay: string, duration: string }>>([]);

    useEffect(() => {
        // Generate particles only on client to avoid hydration mismatch
        const newParticles = Array.from({ length: 10 }).map(() => ({
            left: `${(Math.random() * 80 + 10).toFixed(1)}%`,
            bottom: `${(Math.random() * 20 + 15).toFixed(1)}%`,
            delay: `${(Math.random() * 6).toFixed(1)}s`,
            duration: `${(4 + Math.random() * 4).toFixed(1)}s`,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className={styles.gardenContainer}>
            {/* Sun */}
            <div className={styles.sun}></div>

            {/* Clouds */}
            <div
                className={styles.cloud}
                style={{ top: '8%', left: '-10%', width: '16%', height: '6%', animationDelay: '0s' }}
            ></div>
            <div
                className={styles.cloud}
                style={{ top: '14%', left: '-20%', width: '12%', height: '5%', animationDelay: '5s' }}
            ></div>

            {/* Grass */}
            <div className={styles.grass}></div>

            {/* Butterfly */}
            <div className={styles.butterfly}>
                <div className={`${styles.wing} ${styles.wingLeft}`}></div>
                <div className={`${styles.wing} ${styles.wingRight}`}></div>
            </div>

            {/* Roses */}
            {roseConfigs.map((config, index) => {
                const waveClass = [styles.wave1, styles.wave2, styles.wave3, styles.wave4][index % 4];

                return (
                    <div
                        key={index}
                        className={`${styles.plant} ${waveClass}`}
                        style={{
                            left: `${config.left}%`,
                            height: `${config.height + 15}%`, // Add base height for stem
                            animationDelay: `${config.delay}s`
                        }}
                    >
                        {/* Stem */}
                        <div
                            className={styles.stem}
                            style={{ height: '100%' }} // Stem takes full height of container
                        >
                            {/* Leaves */}
                            <div
                                className={styles.leaf}
                                style={{ bottom: '30%', left: '6px', transform: 'rotate(-30deg)' }}
                            ></div>
                            <div
                                className={`${styles.leaf} ${styles.right}`}
                                style={{ bottom: '50%', right: '6px', left: 'auto', transform: 'rotate(30deg) scaleX(-1)' }}
                            ></div>
                            <div
                                className={styles.leaf}
                                style={{ bottom: '70%', left: '6px', transform: 'rotate(-20deg)' }}
                            ></div>

                            {/* Rose */}
                            <div className={styles.rose} style={{ width: '50px', height: '50px' }}>
                                {Array.from({ length: 12 }).map((_, i) => {
                                    const angle = (i * 360 / 12);
                                    const size = 18 + Math.random() * 8; // This hydration mismatch is minor, ideally fixed seed but acceptable for visual
                                    return (
                                        <div
                                            key={`petal-outer-${i}`}
                                            className={styles.petal}
                                            style={{
                                                width: `${size}px`,
                                                height: `${size * 1.3}px`,
                                                background: `linear-gradient(to top, ${config.roseColor}, ${lightenColor(config.roseColor, 30)})`,
                                                left: '50%',
                                                top: '50%',
                                                transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                                            }}
                                        />
                                    );
                                })}
                                {Array.from({ length: 8 }).map((_, i) => {
                                    const angle = (i * 360 / 8) + 22.5;
                                    return (
                                        <div
                                            key={`petal-inner-${i}`}
                                            className={styles.petal}
                                            style={{
                                                width: '12px',
                                                height: '16px',
                                                background: `linear-gradient(to top, ${config.roseColor}, ${lightenColor(config.roseColor, 50)})`,
                                                left: '50%',
                                                top: '50%',
                                                transform: `translate(-50%, -80%) rotate(${angle}deg)`,
                                                zIndex: 5,
                                            }}
                                        />
                                    );
                                })}
                                <div className={styles.roseCenter}></div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Particles */}
            {particles.map((p, i) => (
                <div
                    key={i}
                    className={styles.particle}
                    style={{
                        left: p.left,
                        bottom: p.bottom,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                />
            ))}
        </div>
    );
};
