/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ReactFlipBook } from '@vuvandinh203/react-flipbook';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { useBookSize } from '../hooks/useBookSize';
import { Page } from './Page';
import { customNavButton } from './NavButton';

const Brochure = () => {
    const flipBookRef = useRef(null);
    const flipSoundRef = useRef(null);
    useEffect(() => {
        const audio = new Audio('./book_page.mp3');
        audio.preload = 'auto';
        audio.volume = 1;
        flipSoundRef.current = audio;
        return () => {
            // cleanup
            if (flipSoundRef.current) {
                flipSoundRef.current.pause();
                flipSoundRef.current = null;
            }
        };
    }, []);

    const playFlipSound = () => {
        const audio = flipSoundRef.current;
        if (!audio) return;
        try {
            audio.currentTime = 0;
            const p = audio.play();
            if (p && typeof p.catch === 'function') p.catch(() => { });
        } catch (e) {
            // ignore play errors
        }
    };

    const screen = useBreakpoint();

    const { width, height } = useBookSize(screen);
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8" style={{ background: 'linear-gradient(to bottom, #a4a679, #338577)' }}>
                <div className="relative w-full ">
                    <ReactFlipBook
                        ref={flipBookRef}
                        className=" mx-auto flex justify-center items-center rounded-lg"
                        width={width}
                        height={height}
                        showNavigationButtons={true}
                        enableKeyboardNav={true}
                        onPageChange={(page) => {
                            playFlipSound();
                        }}
                        renderNavigationButton={customNavButton}
                        flippingTime={800}
                        useMouseEvents={true}
                        swipeDistance={30}
                        autoFlipDelay={6000}
                        autoFlipDirection="next"
                        style={{
                            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        {Array.from({ length: 68 }, (_, i) => (
                            <Page key={`page-${i + 1}`} number={i + 1}>
                                <img
                                    className={`w-full h-full ${screen === 'mobile' ? 'object-contain' : 'object-cover'}`}
                                    src={`./brochure/page_${i + 1}.png`}
                                    alt={`Page ${i + 1}`}
                                    loading="lazy"
                                />
                            </Page>
                        ))}
                    </ReactFlipBook>

                    <div className="mt-4 hidden md:block text-center text-gray-200 text-sm md:text-base font-medium animate-pulse">
                        Sử dụng phím ← →, vuốt hoặc nhấp vào nút để điều hướng
                    </div>

                    <div className="md:hidden mt-5 text-center text-gray-200 text-xs animate-pulse">
                        Vuốt sang trái hoặc phải để lật trang
                    </div>
                </div>
            </div>
        </>
    );
};
export default Brochure
