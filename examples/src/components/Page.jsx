/* eslint-disable no-unused-vars */
import React from "react";

export const Page = React.forwardRef(({ children, number }, ref) => (
    <div
        className="shadow-2xl bg-white overflow-hidden  hover:shadow-xl"
        ref={ref}
    >
        <div className="w-full h-full relative">
            {children}
        </div>
    </div>
));