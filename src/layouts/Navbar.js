import React from "react";

const Logo = () => (
    // add logo later
    <div className="rounded-full w-20 h-20">
        <img src="https://stickershop.line-scdn.net/stickershop/v1/product/23099050/LINEStorePC/main.png?v=1" alt="Logo"/>
    </div>
);

export function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center text-xl font-medium font-inter bg-gray-50 p-3">
            <div className="ml-5">
                <Logo />
            </div>
            <div className="flex flex-row space-x-8 mr-9">
                <a href="/">About</a>
                <a href="/">Work</a>
                <a href="/">Misc</a>
                <a href="/">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;