'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import RightSide from '../components/right';
import LeftSide from '../components/left';

export default function CyclistLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // const isChoose = pathname.includes('/maid/choose');

    const leftWidthClass =  "w-1/3";
    const rightWidthClass = "w-2/3";

    return (
        <div className="flex flex-col h-screen">
            {/* <div className="w-full">
                <Navigation />
            </div> */}
            <div className="flex flex-grow">
                <div className={`flex-initial ${leftWidthClass} pt-10 pl-10 pr-5`}>
                    <div className="w-full">
                        <LeftSide/>
                    </div>
                    {children}
                </div>
                <div className={`flex-initial ${rightWidthClass} pt-10 pr-10 pl-5`}>
                    <RightSide/>
                </div>
            </div>
        </div>
    );
}
