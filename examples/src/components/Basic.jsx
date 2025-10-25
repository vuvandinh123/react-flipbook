import ReactFlipBook from '@vuvandinh203/react-flipbook'
import React from 'react'

const Basic = () => {
    const colors = [
        '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9',
        '#BBDEFB', '#B2EBF2', '#C8E6C9', '#FFF9C4', '#FFE0B2'
    ]

    return (
        <div className='h-screen bg-gray-500 w-screen overflow-hidden flex justify-center items-center'>
            <ReactFlipBook
                width={500}  // Required
                height={700} // Required
                showNavigationButtons={true}
                showPageNumbers={true}
                className='overflow-hidden'
            >
                {Array.from({ length: 10 }, (_, i) => (
                    <div
                        key={i}
                        
                        className="!flex overflow-hidden items-center h-full justify-center border border-gray-300"
                    >
                        <div style={{ backgroundColor: colors[i] }} className="w-full h-full flex items-center justify-center">
                            <h2 className="text-4xl font-bold text-gray-800">
                                Page {i + 1}
                            </h2>
                        </div>

                    </div>
                ))}
            </ReactFlipBook>
        </div>
    )
}

export default Basic
