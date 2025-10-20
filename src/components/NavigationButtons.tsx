export const defaultNavButton = (direction: 'prev' | 'next', onClick: () => void) => (
    <button
        onClick={onClick}
        style={{
            position: 'absolute',
            top: '50%',
            [direction === 'prev' ? 'left' : 'right']: '10px',
            transform: 'translateY(-50%)',
            padding: '10px 15px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 10,
        }}
    >
        {direction === 'prev' ? '←' : '→'}
    </button>
);