"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.webp";
const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
    { name: "Career", href: "/career" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-6 w-full">
            <header className="w-full max-w-6xl rounded-full border border-white/5 bg-[#141414]/85 backdrop-blur-md shadow-2xl pl-3 pr-3 py-2 transition-all duration-300">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <div className="flex items-center pl-2 py-1">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Temp logo - replace with your actual logo image */}
                            <img
                                src={logo.src}
                                alt="CGS Logo"
                                width={156}
                                height={80}
                                className="rounded-full"
                                style={{ display: "block" }}
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-0">
                        {navigation.map((item) => {
                            const isActive =
                                item.href !== "#" &&
                                (item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-[#ed1d24]"
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#ed1d24] rounded-t-full shadow-[0_0_10px_rgba(237,29,36,0.7)]" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center pr-1">
                        <Link
                            href="/contact-us"
                            className="hidden sm:inline-flex h-[42px] items-center justify-center rounded-full bg-[#1c1c1c] hover:bg-white/10 border border-white/10 px-8 text-sm font-bold tracking-wide text-white transition-all duration-300"
                        >
                            Start A Project
                        </Link>
                    </div>

                </div>
            </header>
        </div>
    );
}
