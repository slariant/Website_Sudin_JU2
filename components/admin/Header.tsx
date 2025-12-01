"use client";

import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function Header() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="w-96">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Cari..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 relative">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                        AD
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-semibold text-gray-900 leading-none">Admin Dinas</p>
                        <p className="text-xs text-gray-500 mt-1">Administrator</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
