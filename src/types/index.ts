import { PageFlip } from "page-flip";
import { ReactElement } from "react";

export interface ReactFlipBookProps extends IEnhancedFlipSetting, IEventProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    renderNavigationButton?: (direction: 'prev' | 'next', onClick: () => void) => ReactElement;
    renderPageNumber?: (current: number, total: number) => ReactElement;
    renderPage?: (child: ReactElement, index: number) => ReactElement;
    currentPage?: number;
    onPageChange?: (page: number) => void;
    renderOnlyPageLengthChange?: boolean;
    memoizePages?: boolean;
}

export interface IFlipSetting {
    startPage: number;
    size: 'fixed' | 'stretch';
    width: number;
    height: number;
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    drawShadow: boolean;
    flippingTime: number;
    usePortrait: boolean;
    startZIndex: number;
    autoSize: boolean;
    maxShadowOpacity: number;
    showCover: boolean;
    mobileScrollSupport: boolean;
    clickEventForward: boolean;
    useMouseEvents: boolean;
    swipeDistance: number;
    showPageCorners: boolean;
    disableFlipByClick: boolean;
}

export interface IEventProps {
    onFlip?: (flipEvent: any) => void;
    onChangeOrientation?: (flipEvent: any) => void;
    onChangeState?: (flipEvent: any) => void;
    onInit?: (flipEvent: any) => void;
    onUpdate?: (flipEvent: any) => void;
}

export interface IEnhancedFlipSetting extends Partial<IFlipSetting> {
    animationDuration?: number;
    animationEasing?: string;
    pageBackground?: string;
    pageMargin?: number;
    pageShadow?: boolean;
    showNavigationButtons?: boolean;
    showPageNumbers?: boolean;
    enableKeyboardNav?: boolean;
    enableTouchSwipe?: boolean;
    lazyLoad?: boolean;
    preloadPages?: number;
    onPageLoad?: (pageIndex: number) => void;
    onPageUnload?: (pageIndex: number) => void;
    autoFlipDelay?: number;
    autoFlipDirection?: 'next' | 'prev';
}

export interface ReactFlipBookProps extends IEnhancedFlipSetting, IEventProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    renderNavigationButton?: (direction: 'prev' | 'next', onClick: () => void) => ReactElement;
    renderPageNumber?: (current: number, total: number) => ReactElement;
    renderPage?: (child: ReactElement, index: number) => ReactElement;
    currentPage?: number;
    onPageChange?: (page: number) => void;
    renderOnlyPageLengthChange?: boolean;
    memoizePages?: boolean;
}

export interface ReactFlipBookRef {
    pageFlip: () => PageFlip | undefined;
    flipNext: () => void;
    flipPrev: () => void;
    flip: (page: number) => void;
    getCurrentPageIndex: () => number | undefined;
    getPageCount: () => number | undefined;
    destroy: () => void;
    startAutoFlip: (delay?: number, direction?: 'next' | 'prev') => void;
    stopAutoFlip: () => void;
}

