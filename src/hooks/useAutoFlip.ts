import { PageFlip } from "page-flip";
import { useCallback, useEffect, useRef } from "react";

export const useAutoFlip = (pageFlip: PageFlip | undefined) => {
    const autoFlipTimerRef = useRef<NodeJS.Timeout>();
    const userInteractedRef = useRef(false);

    const startAutoFlip = useCallback((delay: number = 3000, direction: 'next' | 'prev' = 'next') => {
        if (!pageFlip) return;

        stopAutoFlip();
        userInteractedRef.current = false;

        autoFlipTimerRef.current = setInterval(() => {
            if (!userInteractedRef.current) {
                if (direction === 'next') {
                    pageFlip.flipNext();
                } else {
                    pageFlip.flipPrev();
                }
            }
        }, delay);
    }, [pageFlip]);

    const stopAutoFlip = useCallback(() => {
        if (autoFlipTimerRef.current) {
            clearInterval(autoFlipTimerRef.current);
            autoFlipTimerRef.current = undefined;
        }
    }, []);

    const resetAutoFlip = useCallback((delay: number = 3000, _direction: 'next' | 'prev' = 'next') => {
        userInteractedRef.current = true;
        setTimeout(() => {
            userInteractedRef.current = false;
        }, delay);
    }, []);

    useEffect(() => {
        return () => stopAutoFlip();
    }, [stopAutoFlip]);

    return { startAutoFlip, stopAutoFlip, resetAutoFlip, userInteractedRef };
};