import React, { useRef } from 'react'
import { ReactFlipBook } from '@vuvandinh203/react-flipbook'
import { Page } from './Page'

export default function UsingRef() {
    const bookRef = useRef(null)

    const handleFlipNext = () => bookRef.current?.flipNext()
    const handleFlipPrev = () => bookRef.current?.flipPrev()
    const handleFlipToPage = (page) => bookRef.current?.flip(page)
    const getCurrentPage = () => {
        const current = bookRef.current?.getCurrentPageIndex()
        console.log('Current page:', current)
    }

    const colors = [
        '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9',
        '#BBDEFB', '#B2EBF2', '#C8E6C9', '#FFF9C4', '#FFE0B2'
    ]

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-200 to-slate-400">
            {/* FlipBook */}
            <div className="shadow-2xl rounded-xl w-full   ">
                <ReactFlipBook
                    ref={bookRef}
                    width={920}
                    height={630}
                    showCover={false}
                    showPageNumbers
                    className="rounded-lg flex justify-center items-center overflow-hidden"
                >
                    {Array.from({ length: 10 }, (_, i) => (
                        <Page>
                            <div
                                key={i}
                                className="!flex overflow-hidden items-center h-full justify-center border border-gray-300"
                            >
                                <div
                                    style={{ backgroundColor: colors[i % colors.length] }}
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    <h2 className="text-4xl font-bold text-gray-800">
                                        Page {i + 1}
                                    </h2>
                                </div>
                            </div>
                        </Page>
                    ))}
                </ReactFlipBook>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <button
                    onClick={handleFlipPrev}
                    className="px-5 py-2 rounded-full bg-slate-700 text-white hover:bg-slate-800 transition"
                >
                    ← Previous
                </button>

                <button
                    onClick={handleFlipNext}
                    className="px-5 py-2 rounded-full bg-slate-700 text-white hover:bg-slate-800 transition"
                >
                    Next →
                </button>

                <button
                    onClick={() => handleFlipToPage(4)}
                    className="px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                    Go to Page 5
                </button>

                <button
                    onClick={getCurrentPage}
                    className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                    Log Current Page
                </button>
            </div>
        </div>
    )
}
