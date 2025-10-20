import { PageFlip } from "page-flip";
import { useEffect } from "react";
import { IEventProps, ReactFlipBookProps } from "../types";

export const useFlipEvents = (
    pageFlip: PageFlip | undefined,
    props: IEventProps & Pick<ReactFlipBookProps, 'onPageChange' | 'onPageLoad' | 'onPageUnload'>
) => {
    useEffect(() => {
        if (!pageFlip) return;

        const handleFlip = (e: any) => {
            props.onFlip?.(e);
            if (props.onPageChange && e?.data !== undefined) {
                props.onPageChange(e.data);
            }
        };

        const handleInit = (e: any) => {
            props.onInit?.(e);
            if (props.onPageChange && pageFlip.getCurrentPageIndex() !== undefined) {
                props.onPageChange(pageFlip.getCurrentPageIndex());
            }
        };

        pageFlip.on('flip', handleFlip);
        pageFlip.on('init', handleInit);
        
        return () => {
            pageFlip.off('flip');
            pageFlip.off('init');
        };
    }, [pageFlip, props]);
};