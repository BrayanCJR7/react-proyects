import React from 'react';

export const Stonks = (props) => {
    return (
        <>
            <svg
                width={12}
                height={12}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}>
                <path
                    d="M11.5 3 6.75 7.75l-2.5-2.5L.5 9"
                    stroke="#07D635"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.5 3h3v3"
                    stroke="#07D635"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};

export const NoStonks = (props) => {
    return (
        <>
            <svg
                width={12}
                height={13}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}>
                <path
                    d="M11.5 9.5 6.75 4.75l-2.5 2.5L.5 3.5"
                    stroke="#F5450D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.5 9.5h3v-3"
                    stroke="#F5450D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    )
}