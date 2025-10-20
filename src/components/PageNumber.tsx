export const defaultPageNumber = (current: number, total: number) => (
    <div
        style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 15px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            borderRadius: '20px',
            fontSize: '14px',
            zIndex: 10,
        }}
    >
        {current + 1} / {total} {/* Hiển thị currentPageState + 1 */}
    </div>
);