'use client'
import Image from "next/image"
import Link from "next/link"
import testImage from "@/app/favicon.ico"
import { usePathname } from "next/navigation"
import { PageList } from "@/constant/PageList"

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav
        className="flex-none flex flex-col shrink-0 items-start justify-between w-60 bg-dark-surface-1 border-r border-dark-border-soft p-2 gap-5 h-dvh"
        >  
            <Link
            href="/"
            className="flex flex-row items-center justify-center h-16 text-dark-txt-primary bg-light-surface-secondary w-full p-5 pt-10 gap-4 rounded-xl text-2xl text-left font-title"
            >
                Inventory Management
            </Link>
            <div
            className="flex flex-col items-start justify-start w-full gap-2 h-full p-2 mt-5"
            >
                {
                    PageList.map((page) => {
                        const isActive = page.path === pathname
                        const IconComponent = page.icon

                        return (
                            <Link
                            key={page.path}
                            href={page.path}
                            className={`group w-full flex flex-row items-center justify-start gap-3  px-4 py-3 rounded-lg transition-all duration-200
                                ${isActive ? 
                                "bg-dark-surface-3 text-blue-royal shadow-[0px_0px_24px_rgba(0,0,0,0.5)] shadow-blue-royal/10" : 
                                "text-dark-txt-primary bg-light-surface-secondary hover:bg-dark-surface-2 hover:text-blue-royal"
                                }
                            `}
                            >
                                {IconComponent && (
                                    <IconComponent 
                                    size={18}
                                    strokeWidth={2}
                                    className={`transition-all duration-200`}
                                    />
                                )}
                                <span
                                className={`transition-all duration-200`}
                                >{page.name}</span>
                            </Link>
                        )
                    })
                }
                {/* group-hover:text-blue-royal transition-all duration-200 ${isActive ? "text-blue-royal" : ""} */}
            </div>
            <div
            className="flex flex-row items-center justify-center h-16 bg-light-surface-secondary w-full p-3 gap-4 rounded-xl"
            >
                <Image alt="" src={testImage} className="w-10 h-10" />
                <div
                className="flex flex-row gap-2"
                >
                    <Link
                    href="/login"
                    className="bg-dark-surface-2 text-dark-txt-secondary px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-[0px_0px_24px_rgba(0,0,0,0.5)] hover:shadow-blue-royal/10 hover:text-blue-royal hover:bg-dark-surface-3"
                    >
                        Login
                    </Link>
                    <Link
                    href="/signup"
                    className="bg-dark-surface-4 text-dark-txt-primary px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-[0px_0px_24px_rgba(0,0,0,0.5)] hover:shadow-blue-royal/10 hover:text-blue-royal hover:bg-dark-surface-5"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    )
}