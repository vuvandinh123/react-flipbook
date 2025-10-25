import { useState, useEffect } from "react";

export function useBreakpoint() {
    const getDevice = (width) => {
        if (width < 640) return "mobile";               // <sm
        if (width < 1024) return "tablet";              // sm - lg
        if (width < 1280) return "laptop";              // lg - xl
        if (width < 1536) return "desktop";             // xl - 2xl
        if (width < 1920) return "desktop_large";       // 2xl - Full HD
        if (width < 2560) return "desktop_ultra";       // 2K - QHD
        if (width < 3840) return "desktop_4k";          // 4K UHD
        if (width < 7680) return "desktop_8k";          // 8K UHD
        return "desktop_mega";                          // > 8K
    };

    const [device, setDevice] = useState(() =>
        typeof window !== "undefined" ? getDevice(window.innerWidth) : "desktop"
    );

    useEffect(() => {
        const handleResize = () => setDevice(getDevice(window.innerWidth));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return device;
}
