import React, { useEffect, useRef } from 'react';

interface EnergyBeamProps {
    projectId?: string;
    className?: string;
    flipHorizontal?: boolean;
}

declare global {
    interface Window {
        UnicornStudio?: {
            init: () => void;
        };
    }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
    projectId = "hRFfUymDGOHwtFe7evR2",
    className = "",
    flipHorizontal = false
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const loadScript = () => {
            if (scriptLoadedRef.current) return;

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
            script.async = true;

            script.onload = () => {
                scriptLoadedRef.current = true;
                if (window.UnicornStudio && containerRef.current) {
                    console.log('Unicorn Studio loaded, initializing project...');
                    // Initialize the Unicorn Studio project
                    window.UnicornStudio.init();
                }
            };

            document.head.appendChild(script);

            return () => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        };

        loadScript();
    }, [projectId]);

    return (
        <div className={`relative w-full h-screen bg-black overflow-hidden ${className}`} style={{ minHeight: 'inherit' }}>
            <div
                ref={containerRef}
                data-us-project={projectId}
                className="w-full h-full"
                style={flipHorizontal ? { transform: 'scaleX(-1)' } : undefined}
            />
        </div>
    );
};

export default EnergyBeam;
