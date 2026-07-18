'use client'
import Image from "next/image"
import testImage from "@/app/favicon.ico"

export default function Navbar() {
    return (
        <nav
        className="flex-none flex flex-col items-start justify-between w-1/6 bg-blue-400 p-2"
        >  
            <div
            className=""
            >
                
            </div>
            <div
            className=" flex flex-row items-center justify-center h-16 text-black bg-blue-500 w-full p-3 gap-4 rounded-xl"
            >
                <Image alt="" src={testImage} className="w-10 h-10" />
                <div
                className="flex flex-row gap-2 text-neutral-800"
                >
                    <button
                    className="bg-neutral-200 px-3 py-1 rounded-lg font-bold"
                    >
                        Login
                    </button>
                    <button
                    className="bg-neutral-200 px-3 py-1 rounded-lg font-bold"
                    >
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    )
}