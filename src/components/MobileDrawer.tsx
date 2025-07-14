"use client";

import Link from "next/link";
import { useState } from "react";

const MobileDrawer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsOpen((prev: boolean): boolean => !prev);
    }

    const closeDrawer = () => {
        setIsOpen(false);
    }

    return (
        <nav className="sm:hidden">
            <button onClick={toggleDrawer} className="h-full flex items-center justify-center">
                <svg className="size-10 drop-shadow-lg" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_33_36)">
                        <path d="M104 84C106.761 84 109 86.2386 109 89C109 91.7614 106.761 94 104 94H24C21.2386 94 19 91.7614 19 89C19 86.2386 21.2386 84 24 84H104Z" fill="#810000"/>
                        <path d="M104 59C106.761 59 109 61.2386 109 64C109 66.7614 106.761 69 104 69H24C21.2386 69 19 66.7614 19 64C19 61.2386 21.2386 59 24 59H104Z" fill="#810000"/>
                        <path d="M104 34C106.761 34 109 36.2386 109 39C109 41.7614 106.761 44 104 44H24C21.2386 44 19 41.7614 19 39C19 36.2386 21.2386 34 24 34H104Z" fill="#810000"/>
                    </g>
                    <defs>
                        <filter id="filter0_i_33_36" x="19" y="34" width="90" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_33_36"/>
                        </filter>
                    </defs>
                </svg>
            </button>
            <div onClick={closeDrawer} className={`h-full w-full z-10 right-0 top-0 bg-black/30 absolute ${isOpen ? 'block': 'hidden'}`}>
                <div className="h-full z-20 right-0 top-0 absolute w-3/4 bg-[url('../../public/image_assets/parchment.png')] shadow-2xl p-4">
                    <div className="w-full flex items-center justify-center">
                        <h3 className="w-full my-2 tracking-wide text-center text-2xl text-[#720000] font-kaushanscript font-medium drop-shadow-md drop-shadow-white">Menu</h3>
                        <button onClick={closeDrawer} className="p-2 drop-shadow-md drop-shadow-white right-0 absolute">
                            <svg className="size-10" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_35_65)">
                                    <path d="M31.1966 31.1969C34.1255 28.268 38.8741 28.268 41.803 31.1969L64.0013 53.3942L86.2005 31.1969L86.4798 30.9303C89.4239 28.2704 93.9696 28.3596 96.8069 31.1969C99.644 34.0343 99.7324 38.5791 97.0726 41.5231L96.8069 41.8034L74.6077 64.0006L96.8069 86.1989L97.0726 86.4792C99.7327 89.4233 99.6444 93.9689 96.8069 96.8063C93.9695 99.6436 89.4239 99.732 86.4798 97.0719L86.2005 96.8063L64.0013 74.6071L41.803 96.8063C38.8741 99.7349 34.1254 99.735 31.1966 96.8063C28.2677 93.8775 28.2679 89.1288 31.1966 86.1999L53.3948 64.0016L31.1966 41.8034C28.2677 38.8745 28.2679 34.1259 31.1966 31.1969Z" fill="#810000"/>
                                </g>
                                <defs>
                                    <filter id="filter0_i_35_65" x="29" y="29" width="70.0034" height="74.0027" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_65"/>
                                    </filter>
                                </defs>
                            </svg>

                        </button>
                    </div>
                    <ul className="space-y-6 font-sansita text-xl text-[#720000] mt-6">
                        <li><Link className="drop-shadow-lg drop-shadow-amber-50 tracking-wide transition-all duration-200" href="/guildcard">Guild Card</Link></li>
                        <li><Link className="drop-shadow-lg drop-shadow-amber-50 tracking-wide transition-all duration-200" href="/questboard">Quest Board</Link></li>
                        <li><Link className="drop-shadow-lg drop-shadow-amber-50 tracking-wide transition-all duration-200" href="/tavern">Tavern</Link></li>
                        <li><Link className="drop-shadow-lg drop-shadow-amber-50 tracking-wide transition-all duration-200" href="/reception">Reception</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MobileDrawer;