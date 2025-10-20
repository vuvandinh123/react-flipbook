import React, { ReactElement, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { ReactFlipBookProps, ReactFlipBookRef } from "../types";
import { useAutoFlip, useFlipEvents, useKeyboardNavigation, usePageFlip } from "../hooks";
import { defaultNavButton } from "../components/NavigationButtons";
import { defaultPageNumber } from "../components/PageNumber";

const ReactFlipBookForward = React.forwardRef<ReactFlipBookRef, ReactFlipBookProps>(
    (props, ref) => {
        const {
            className = '',
            style = {},
            children,
            renderNavigationButton,
            renderPageNumber,
            renderPage,
            currentPage,
            onPageChange,
            renderOnlyPageLengthChange = false,
            showNavigationButtons = false,
            showPageNumbers = false,
            enableKeyboardNav = true,
            autoFlipDelay,
            autoFlipDirection = 'next',
        } = props;

        const htmlElementRef = useRef<HTMLDivElement>(null);
        const childRef = useRef<HTMLElement[]>([]);
        const [pages, setPages] = useState<ReactElement[]>([]);
        const [currentPageState, setCurrentPageState] = useState(2);
        const [totalPages, setTotalPages] = useState(0);

        const { pageFlip, initialize, destroy, isInitialized } = usePageFlip(
            htmlElementRef,
            props
        );
        const { startAutoFlip, stopAutoFlip, resetAutoFlip } = useAutoFlip(pageFlip);

        useImperativeHandle(ref, () => ({
            pageFlip: () => pageFlip,
            flipNext: () => {
                resetAutoFlip(autoFlipDelay || 3000, autoFlipDirection); // Reset auto flip
                pageFlip?.flipNext();
            },
            flipPrev: () => {
                resetAutoFlip(autoFlipDelay || 3000, autoFlipDirection); // Reset auto flip
                pageFlip?.flipPrev();
            },
            flip: (page: number) => {
                resetAutoFlip(autoFlipDelay || 3000, autoFlipDirection); // Reset auto flip
                pageFlip?.flip(page);
            },
            getCurrentPageIndex: () => {
                setCurrentPageState(pageFlip?.getCurrentPageIndex() || 0);
                return pageFlip?.getCurrentPageIndex();
            },
            getPageCount: () => pageFlip?.getPageCount(),
            destroy,
            startAutoFlip,
            stopAutoFlip,
        }), [pageFlip, destroy, startAutoFlip, stopAutoFlip, resetAutoFlip, autoFlipDelay, autoFlipDirection]);

        useFlipEvents(pageFlip, {
            ...props,
            onPageChange: (page) => {
                setCurrentPageState(page); // Cập nhật currentPageState
                setTotalPages(pageFlip?.getPageCount() || 0); // Cập nhật totalPages
                onPageChange?.(page); // Gọi callback onPageChange
                resetAutoFlip(autoFlipDelay || 3000, autoFlipDirection); // Reset auto flip khi trang thay đổi
            },
        });

        useKeyboardNavigation(pageFlip, enableKeyboardNav);

        useEffect(() => {
            if (currentPage !== undefined && pageFlip && currentPage !== currentPageState) {
                pageFlip.flip(currentPage);
                setCurrentPageState(currentPage); // Đồng bộ currentPageState
            }
        }, [currentPage, pageFlip, currentPageState]);

        useEffect(() => {
            if (pageFlip && isInitialized) {
                setTotalPages(pageFlip.getPageCount());
            }
        }, [pageFlip, isInitialized]);

        useEffect(() => {
            if (isInitialized && autoFlipDelay && autoFlipDelay > 0) {
                startAutoFlip(autoFlipDelay, autoFlipDirection);
                return () => stopAutoFlip();
            }
            return undefined;
        }, [isInitialized, autoFlipDelay, autoFlipDirection, startAutoFlip, stopAutoFlip]);

        const processedPages = useMemo(() => {
            if (!children) return [];

            childRef.current = [];

            const childList = React.Children.map(children, (child, index) => {
                const element = child as ReactElement;
                const renderedChild = renderPage ? renderPage(element, index) : element;

                return React.cloneElement(renderedChild, {
                    key: `page-${index}`,
                    ref: (dom: HTMLElement) => {
                        if (dom) {
                            childRef.current[index] = dom;
                        }
                    },
                });
            });

            return childList || [];
        }, [children, renderPage]);

        useEffect(() => {
            if (!renderOnlyPageLengthChange || pages.length !== processedPages.length) {
                if (processedPages.length < pages.length && pageFlip) {
                    destroy();
                }
                setPages(processedPages);
            }
        }, [processedPages, renderOnlyPageLengthChange, pages.length, pageFlip, destroy]);

        useEffect(() => {
            if (pages.length > 0 && childRef.current.length > 0) {
                initialize(childRef.current);
            }
        }, [pages, initialize]);

        const handlePrev = useCallback(() => {
            resetAutoFlip(autoFlipDelay || 3000, autoFlipDirection); // Reset auto flip
            pageFlip?.flipPrev();
        }, [pageFlip, resetAutoFlip, autoFlipDelay, autoFlipDirection]);

        const handleNext = useCallback(() => {
            resetAutoFlip(autoFlipDelay || 3000, autoFlipDirection); // Reset auto flip
            pageFlip?.flipNext();
        }, [pageFlip, resetAutoFlip, autoFlipDelay, autoFlipDirection]);

        return (
            <div style={{ position: 'relative', ...style }} className={className}>
                <div ref={htmlElementRef} style={{ width: '100%', height: '100%' }}>
                    {pages}
                </div>

                {showNavigationButtons && isInitialized && (
                    <>
                        {renderNavigationButton
                            ? renderNavigationButton('prev', handlePrev)
                            : defaultNavButton('prev', handlePrev)}
                        {renderNavigationButton
                            ? renderNavigationButton('next', handleNext)
                            : defaultNavButton('next', handleNext)}
                    </>
                )}

                {showPageNumbers && isInitialized && totalPages > 0 && (
                    renderPageNumber
                        ? renderPageNumber(currentPageState, totalPages)
                        : defaultPageNumber(currentPageState, totalPages)
                )}
            </div>
        );
    }
);

ReactFlipBookForward.displayName = 'ReactFlipBook';

export const ReactFlipBook = React.memo(ReactFlipBookForward);

export default ReactFlipBook;
