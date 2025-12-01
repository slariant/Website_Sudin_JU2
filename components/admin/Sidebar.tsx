"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    Newspaper,
    Briefcase,
    Settings,
    Users,
    Image,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Halaman", href: "/admin/pages", icon: FileText },
    { name: "Berita", href: "/admin/news", icon: Newspaper },
    { name: "Layanan", href: "/admin/services", icon: Briefcase },
    { name: "Media", href: "/admin/media", icon: Image },
    { name: "Pengaduan", href: "/admin/messages", icon: MessageSquare },
    { name: "Pengguna", href: "/admin/users", icon: Users },
    { name: "Pengaturan", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    return (
        <aside
            className={cn(
                "bg-white border-r border-gray-200 h-screen sticky top-0 transition-all duration-300 flex flex-col z-20",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                {!collapsed && (
                    <span className="font-bold text-xl text-blue-600 truncate">Admin Panel</span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-2 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center px-3 py-3 rounded-lg transition-colors group relative",
                                    isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                )}
                            >
                                <item.icon size={20} className={cn("flex-shrink-0", isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-900")} />
                                {!collapsed && (
                                    <span className="ml-3 font-medium text-sm">{item.name}</span>
                                )}
                                {collapsed && (
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={() => router.push("/login")}
                    className={cn(
                        "flex items-center w-full px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors",
                        collapsed && "justify-center"
                    )}>
                    <LogOut size={20} />
                    {!collapsed && <span className="ml-3 font-medium text-sm">Keluar</span>}
                </button>
            </div>
        </aside>
    );
}
