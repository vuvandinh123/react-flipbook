export const customNavButton = (direction, onClick) => (
    <button
        onClick={onClick}
        className={`
                absolute top-1/2 -translate-y-1/2 
                ${direction === 'prev' ? 'left-4 md:-left-6' : 'right-2 md:-right-6'}
                bg-gradient-to-r from-green-400 to-blue-500
              text-white p-3 md:p-4 rounded-full 
                shadow-lg hover:shadow-xl 
                transform hover:scale-110 transition-all duration-200
                z-20 opacity-90 hover:opacity-100
                    `}
    >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {direction === 'prev' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);