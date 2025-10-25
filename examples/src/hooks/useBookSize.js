import { useMemo } from "react";

const BASE = { width: 720, height: 430 }; // chuẩn desktop_ultra
const RATIO = BASE.width / BASE.height;   // ≈ 1.52

export function useBookSize(screen) {
    const { width, height } = useMemo(() => {
        switch (screen) {
            case "mobile":
                return { width: 320, height: Math.round(320 / RATIO) };  // ~210
            case "tablet":
                return { width: 400, height: Math.round(400 / RATIO) };  // ~395
            case "laptop":
                return { width: 500, height: Math.round(500 / RATIO) };  // ~525
            case "desktop":
                return { width: 600, height: Math.round(600 / RATIO) };  // ~580
            case "desktop_large":
                return { width: 800, height: Math.round(800 / RATIO) };  // ~605
            case "desktop_ultra":
                return { width: 920, height: 650 };                      // chuẩn
            case "desktop_4k":
                return { width: 1200, height: Math.round(1200 / RATIO) }; // ~790
            case "desktop_8k":
                return { width: 1600, height: Math.round(1600 / RATIO) }; // ~1050
            case "desktop_mega":
                return { width: 2000, height: Math.round(2000 / RATIO) }; // ~1315
            default:
                return BASE;
        }
    }, [screen]);

    return { width, height };
}
