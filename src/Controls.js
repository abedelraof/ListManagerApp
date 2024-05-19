import React from 'react';

const Controls = ({
    selectedLeft,
    selectedRight,
    transferSelectedToRight,
    transferSelectedToLeft,
    transferAllToRight,
    transferAllToLeft,
    leftItems,
    rightItems,
}) => {
    return (
        <div className="controls">
            <button
                onClick={transferSelectedToRight}
                disabled={selectedLeft.length === 0}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button
                onClick={transferSelectedToLeft}
                disabled={selectedRight.length === 0}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button
                onClick={transferAllToRight}
                disabled={leftItems.length === 0}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button
                onClick={transferAllToLeft}
                disabled={rightItems.length === 0}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    <path d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default Controls;
