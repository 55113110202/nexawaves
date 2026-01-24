"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Common colors mapped from the theme for consistency
const colors = {
    outline: "#7d5547", // sandstone-800
    fillLight: "#f5f0eb", // sandstone-100
    fillMedium: "#ebe0d6", // sandstone-200
    fillDark: "#dfcdbb", // sandstone-300
    accent: "#c0957b", // sandstone-500
    highlight: "#b28066", // sandstone-600
};

export const DesignVisual: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

                <defs>
                    <clipPath id="designRevealClip">
                        <motion.rect
                            x="0" y="0" height="100"
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        />
                    </clipPath>
                </defs>

                {/* 2. The Blueprint (Wireframe) - "The Plan" */}
                <g opacity="0.6">
                    <motion.rect x="20" y="20" width="60" height="60" rx="2" stroke={colors.outline} strokeWidth="1" strokeDasharray="3 3" fill="none"
                        animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity }} />
                    {/* Wireframe Header */}
                    <rect x="24" y="24" width="52" height="12" rx="1" stroke={colors.outline} strokeWidth="0.5" strokeDasharray="2 2" />
                    {/* Wireframe Left Col */}
                    <rect x="24" y="40" width="24" height="36" rx="1" stroke={colors.outline} strokeWidth="0.5" strokeDasharray="2 2" />
                    {/* Wireframe Right Col Items */}
                    <rect x="52" y="40" width="24" height="16" rx="1" stroke={colors.outline} strokeWidth="0.5" strokeDasharray="2 2" />
                    <rect x="52" y="60" width="24" height="16" rx="1" stroke={colors.outline} strokeWidth="0.5" strokeDasharray="2 2" />

                    {/* Measurement markers indicating precision */}
                    <path d="M15 20 V80 M20 85 H80" stroke={colors.fillDark} strokeWidth="0.5" />
                    <circle cx="15" cy="20" r="1" fill={colors.outline} />
                    <circle cx="15" cy="80" r="1" fill={colors.outline} />
                    <circle cx="80" cy="85" r="1" fill={colors.outline} />
                    <circle cx="20" cy="85" r="1" fill={colors.outline} />
                </g>

                {/* 3. The Refined Product (Polished) - "The Result" - Revealed by clipPath */}
                <g clipPath="url(#designRevealClip)">
                    {/* Main Card Base */}
                    <rect x="20" y="20" width="60" height="60" rx="2" fill={colors.fillLight} stroke={colors.outline} strokeWidth="1" />

                    {/* Polished Header */}
                    <rect x="24" y="24" width="52" height="12" rx="1" fill={colors.fillDark} />
                    <circle cx="28" cy="30" r="1.5" fill={colors.outline} opacity="0.5" />
                    <rect x="33" y="28.5" width="20" height="3" rx="1.5" fill={colors.fillLight} opacity="0.5" />

                    {/* Polished Hero Area with Graphic */}
                    <rect x="24" y="40" width="24" height="36" rx="1" fill={colors.accent} />
                    <path d="M30 60 L36 52 L42 58" stroke={colors.fillLight} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="40" cy="48" r="2" fill={colors.fillLight} opacity="0.8" />

                    {/* Polished Content Blocks */}
                    <rect x="52" y="40" width="24" height="16" rx="1" fill={colors.fillMedium} />
                    <rect x="56" y="44" width="16" height="2" rx="1" fill={colors.outline} opacity="0.3" />
                    <rect x="56" y="48" width="10" height="2" rx="1" fill={colors.outline} opacity="0.3" />

                    <rect x="52" y="60" width="24" height="16" rx="1" fill={colors.fillMedium} />
                    <rect x="56" y="64" width="16" height="2" rx="1" fill={colors.outline} opacity="0.3" />
                    <rect x="56" y="68" width="12" height="2" rx="1" fill={colors.outline} opacity="0.3" />

                    {/* CTA Button Highlight */}
                    <rect x="68" y="70" width="6" height="4" rx="1" fill={colors.highlight} />

                    {/* Subtle Shine Reflection */}
                    <motion.path
                        d="M20 80 L30 20 L50 20 L40 80 Z"
                        fill="white" opacity="0.1"
                        initial={{ x: -50 }}
                        animate={{ x: 80 }}
                        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    />
                </g>

                {/* 4. The Transformation Bar (The "Builder/Scanner") */}
                <motion.line
                    x1="0" y1="15" x2="0" y2="85"
                    stroke={colors.highlight}
                    strokeWidth="1.5"
                    initial={{ x1: 0, x2: 0 }}
                    animate={{ x1: 100, x2: 100 }}
                    transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                />

                {/* 5. Brand Value Badge/Stamp - Appears after refinement */}
                <motion.g transform="translate(75, 15)">
                    <motion.circle r="7" fill={colors.highlight} stroke={colors.fillLight} strokeWidth="1"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ delay: 2.2, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                    />
                    <motion.path d="M-3.5 0.5 L-1 3 L3.5 -1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{ delay: 2.4, duration: 0.3, repeat: Infinity, repeatDelay: 4.2 }}
                    />
                </motion.g>

            </svg>
        </div>
    );
};

export const GrowthVisual: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* Ground/Soil */}
                <ellipse cx="50" cy="92" rx="35" ry="6" fill={colors.fillDark} opacity="0.5" />

                {/* Main Stem - grows upward */}
                <motion.path
                    d="M50 90 Q50 70 50 50 Q50 35 48 20"
                    stroke={colors.outline}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />

                {/* Left Branch */}
                <motion.path
                    d="M50 60 Q40 55 30 50"
                    stroke={colors.outline}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                />

                {/* Right Branch */}
                <motion.path
                    d="M50 45 Q60 40 70 38"
                    stroke={colors.outline}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                />

                {/* Left Leaf 1 */}
                <motion.ellipse
                    cx="25" cy="48" rx="8" ry="4"
                    fill={colors.accent}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: -30 }}
                    transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
                    style={{ transformOrigin: "30px 50px" }}
                />

                {/* Right Leaf 1 */}
                <motion.ellipse
                    cx="75" cy="36" rx="8" ry="4"
                    fill={colors.accent}
                    initial={{ scale: 0, rotate: 25 }}
                    animate={{ scale: 1, rotate: 25 }}
                    transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                    style={{ transformOrigin: "70px 38px" }}
                />

                {/* Left Leaf 2 (smaller) */}
                <motion.ellipse
                    cx="38" cy="68" rx="6" ry="3"
                    fill={colors.highlight}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: -45 }}
                    transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                />

                {/* Right Leaf 2 (smaller) */}
                <motion.ellipse
                    cx="62" cy="55" rx="6" ry="3"
                    fill={colors.highlight}
                    initial={{ scale: 0, rotate: 40 }}
                    animate={{ scale: 1, rotate: 40 }}
                    transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                />

                {/* Flower/Bloom at top */}
                <motion.g>
                    {[0, 72, 144, 216, 288].map((angle, i) => (
                        <motion.ellipse
                            key={i}
                            cx="48" cy="15" rx="5" ry="3"
                            fill={colors.fillLight}
                            stroke={colors.accent}
                            strokeWidth="0.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2 + i * 0.1, duration: 0.3, type: "spring" }}
                            style={{
                                transformOrigin: "48px 20px",
                                transform: `rotate(${angle}deg)`
                            }}
                        />
                    ))}
                    {/* Center of flower */}
                    <motion.circle
                        cx="48" cy="20" r="4"
                        fill={colors.highlight}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.5, duration: 0.3, type: "spring" }}
                    />
                </motion.g>

                {/* Floating particles (pollen/growth energy) */}
                {[
                    { x: 30, y: 30, delay: 3 },
                    { x: 65, y: 25, delay: 3.5 },
                    { x: 55, y: 40, delay: 4 }
                ].map((p, i) => (
                    <motion.circle
                        key={i}
                        cx={p.x} cy={p.y} r="1.5"
                        fill={colors.fillLight}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: [0, 1, 0], y: -10 }}
                        transition={{ delay: p.delay, duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    />
                ))}

            </svg>
        </div>
    );
};

export const TechVisual: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* SCALABILITY: Stacking Server Blocks that grow upward */}

                {/* Base Block (always visible) */}
                <motion.rect
                    x="25" y="70" width="50" height="12" rx="2"
                    fill={colors.fillDark} stroke={colors.outline} strokeWidth="1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <rect x="30" y="74" width="3" height="3" rx="0.5" fill={colors.accent} />
                <rect x="35" y="74" width="3" height="3" rx="0.5" fill={colors.accent} />

                {/* Second Block */}
                <motion.rect
                    x="25" y="55" width="50" height="12" rx="2"
                    fill={colors.fillMedium} stroke={colors.outline} strokeWidth="1"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.rect x="30" y="59" width="3" height="3" rx="0.5" fill={colors.highlight}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                />
                <motion.rect x="35" y="59" width="3" height="3" rx="0.5" fill={colors.highlight}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                />

                {/* Third Block */}
                <motion.rect
                    x="25" y="40" width="50" height="12" rx="2"
                    fill={colors.fillLight} stroke={colors.outline} strokeWidth="1"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                />
                <motion.rect x="30" y="44" width="3" height="3" rx="0.5" fill={colors.accent}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                />
                <motion.rect x="35" y="44" width="3" height="3" rx="0.5" fill={colors.accent}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
                />

                {/* Upward Arrow (Scale indicator) */}
                <motion.path
                    d="M85 75 V35 M85 35 L80 42 M85 35 L90 42"
                    stroke={colors.outline}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                />

                {/* SECURITY: Lock Icon */}
                <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring" }}>
                    {/* Lock Body */}
                    <rect x="10" y="25" width="16" height="14" rx="2" fill={colors.highlight} stroke={colors.outline} strokeWidth="1" />

                    {/* Lock Shackle */}
                    <motion.path
                        d="M14 25 V20 C14 16 22 16 22 20 V25"
                        stroke={colors.outline}
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 2.3, duration: 0.5 }}
                    />

                    {/* Keyhole */}
                    <circle cx="18" cy="30" r="2" fill={colors.fillLight} />
                    <rect x="17" y="31" width="2" height="4" fill={colors.fillLight} />
                </motion.g>

                {/* Connecting Lines from Lock to Servers */}
                <motion.path
                    d="M26 32 L25 40"
                    stroke={colors.accent}
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                />
                <motion.path
                    d="M26 32 L25 55"
                    stroke={colors.accent}
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 }}
                />
                <motion.path
                    d="M26 32 L25 70"
                    stroke={colors.accent}
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.9 }}
                />

                {/* Checkmark Badge */}
                <motion.g transform="translate(80, 20)">
                    <motion.circle r="8" fill={colors.fillLight} stroke={colors.outline} strokeWidth="1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 3, type: "spring" }}
                    />
                    <motion.path
                        d="M-4 0 L-1 3 L4 -2"
                        stroke={colors.highlight}
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 3.3, duration: 0.3 }}
                    />
                </motion.g>

            </svg>
        </div>
    );
};

export const ConversionVisual: React.FC = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* Winding Path */}
                <motion.path
                    d="M10 20 C30 20 30 50 50 50 C70 50 70 80 90 80"
                    stroke={colors.fillMedium}
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                />
                <motion.path
                    d="M10 20 C30 20 30 50 50 50 C70 50 70 80 90 80"
                    stroke={colors.outline}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="4 4"
                />

                {/* Input: Clustered Small Triangles */}
                <motion.g animate={{ offsetDistance: "100%" }}>
                    <g>
                        {/* Main cluster of 3 triangles */}
                        <polygon points="-4,-4 0,-4 -2,0" fill={colors.fillDark} stroke={colors.outline} strokeWidth="0.5" />
                        <polygon points="0,-4 4,-4 2,0" fill={colors.fillDark} stroke={colors.outline} strokeWidth="0.5" />
                        <polygon points="-2,0 2,0 0,4" fill={colors.accent} stroke={colors.outline} strokeWidth="0.5" />
                        <animateMotion path="M10 20 C30 20 30 50 50 50" dur="4s" repeatCount="indefinite" fill="freeze" />
                        <animate attributeName="opacity" values="1;0" keyTimes="0.9;1" dur="4s" repeatCount="indefinite" />
                    </g>
                </motion.g>

                {/* Second wave of clustered triangles */}
                <motion.g animate={{ offsetDistance: "100%" }}>
                    <g>
                        <polygon points="-3,-3 0,-3 -1.5,1" fill={colors.fillMedium} stroke={colors.outline} strokeWidth="0.5" />
                        <polygon points="0,-3 3,-3 1.5,1" fill={colors.fillMedium} stroke={colors.outline} strokeWidth="0.5" />
                        <polygon points="-1.5,1 1.5,1 0,4" fill={colors.highlight} stroke={colors.outline} strokeWidth="0.5" />
                        <animateMotion path="M10 20 C30 20 30 50 50 50" dur="4s" begin="1.5s" repeatCount="indefinite" fill="freeze" />
                        <animate attributeName="opacity" values="1;0" keyTimes="0.9;1" dur="4s" begin="1.5s" repeatCount="indefinite" />
                    </g>
                </motion.g>

                {/* The Converter (Gate/Gear) */}
                <motion.g transform="translate(50, 50)">
                    <motion.circle r="12" fill={colors.fillLight} stroke={colors.outline} strokeWidth="1.5" />
                    <motion.path
                        d="M-8 0 L8 0 M0 -8 L0 8"
                        stroke={colors.accent}
                        strokeWidth="2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </motion.g>

                {/* Output: $ Symbols instead of dots */}
                <motion.g>
                    <text fill={colors.highlight} fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        <animateMotion path="M50 50 C70 50 70 80 90 80" dur="2s" begin="2s" repeatCount="indefinite" fill="freeze" />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" begin="2s" repeatCount="indefinite" />
                        $
                    </text>
                </motion.g>

                {/* Second $ wave */}
                <motion.g>
                    <text fill={colors.accent} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                        <animateMotion path="M50 50 C70 50 70 80 90 80" dur="2s" begin="2.8s" repeatCount="indefinite" fill="freeze" />
                        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2s" begin="2.8s" repeatCount="indefinite" />
                        $
                    </text>
                </motion.g>

                {/* Collection Chest with $ */}
                <g transform="translate(85, 75)">
                    <rect x="-10" y="0" width="20" height="15" rx="2" fill={colors.outline} />
                    <rect x="-10" y="0" width="20" height="5" fill={colors.highlight} />
                    <text x="0" y="11" fill={colors.fillLight} fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">$</text>
                </g>

                {/* Falling $ into chest */}
                <motion.text
                    x="85" y="70"
                    fill={colors.highlight}
                    fontSize="8"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 5, opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5, delay: 3 }}
                >
                    $
                </motion.text>

            </svg>
        </div>
    );
};
