import { PageFlip } from "page-flip";
import { useCallback, useRef, useState } from "react";
import { ReactFlipBookProps } from "../types";

export const usePageFlip = (
    htmlElementRef: React.RefObject<HTMLDivElement>,
    props: ReactFlipBookProps
) => {
    const pageFlipRef = useRef<PageFlip>();
    const [isInitialized, setIsInitialized] = useState(false);

    const initialize = useCallback((children: HTMLElement[]) => {
        if (htmlElementRef.current && children.length > 0) {
            if (!pageFlipRef.current) {
                const settings: any = {
                    width: props.width || 500,
                    height: props.height || 700,
                    size: props.size || 'fixed',
                    minWidth: props.minWidth,
                    maxWidth: props.maxWidth,
                    minHeight: props.minHeight,
                    maxHeight: props.maxHeight,
                    startPage: props.startPage || 0,
                    drawShadow: props.drawShadow !== false,
                    flippingTime: props.flippingTime || 1000,
                    usePortrait: props.usePortrait !== false,
                    startZIndex: props.startZIndex || 0,
                    autoSize: props.autoSize !== false,
                    maxShadowOpacity: props.maxShadowOpacity || 1,
                    showCover: props.showCover || false,
                    mobileScrollSupport: props.mobileScrollSupport !== false,
                    clickEventForward: props.clickEventForward !== false,
                    useMouseEvents: props.useMouseEvents !== false,
                    swipeDistance: props.swipeDistance || 30,
                    showPageCorners: props.showPageCorners !== false,
                    disableFlipByClick: props.disableFlipByClick || false,
                };

                pageFlipRef.current = new PageFlip(htmlElementRef.current, settings);
            }

            if (!pageFlipRef.current.getFlipController()) {
                pageFlipRef.current.loadFromHTML(children);
                setIsInitialized(true);
            } else {
                pageFlipRef.current.updateFromHtml(children);
            }
        }
    }, [htmlElementRef, props]);

    const destroy = useCallback(() => {
        if (pageFlipRef.current) {
            pageFlipRef.current.destroy();
            pageFlipRef.current = undefined;
            setIsInitialized(false);
        }
    }, []);

    return { pageFlip: pageFlipRef.current, initialize, destroy, isInitialized };
};