import { PageFlip } from "page-flip";
import { useEffect } from "react";

export const useKeyboardNavigation = (
    pageFlip: PageFlip | undefined,
    enabled: boolean = true
) => {
    useEffect(() => {
        if (!enabled || !pageFlip) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowLeft':
                case 'PageUp':
                    pageFlip.flipPrev();
                    break;
                case 'ArrowRight':
                case 'PageDown':
                    pageFlip.flipNext();
                    break;
                case 'Home':
                    pageFlip.flip(0);
                    break;
                case 'End':
                    pageFlip.flip(pageFlip.getPageCount() - 1);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [pageFlip, enabled]);
};