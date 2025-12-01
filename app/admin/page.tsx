"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, Newspaper, Briefcase, Users, ArrowUp, ArrowDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
    {
        title: "Total Berita",
        value: "24",
        change: "+12%",
        trend: "up",
        icon: Newspaper,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        title: "Halaman Aktif",
        value: "8",
        change: "+2",
        trend: "up",
        icon: FileText,
        color: "text-green-600",
        bg: "bg-green-100"
    },
    {
        title: "Layanan Publik",
        value: "12",
        change: "0%",
        trend: "neutral",
        icon: Briefcase,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        title: "Pengunjung Hari Ini",
        value: "1,204",
        change: "-5%",
        trend: "down",
        icon: Users,
        color: "text-orange-600",
        bg: "bg-orange-100"
    }
];

const data = [
    { name: 'Sen', visitors: 400 },
    { name: 'Sel', visitors: 300 },
    { name: 'Rab', visitors: 550 },
    { name: 'Kam', visitors: 450 },
    { name: 'Jum', visitors: 600 },
    { name: 'Sab', visitors: 200 },
    { name: 'Min', visitors: 150 },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500">Selamat datang kembali, Admin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                                <div className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' :
                                        stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                                    }`}>
                                    {stat.trend === 'up' && <ArrowUp size={16} className="mr-1" />}
                                    {stat.trend === 'down' && <ArrowDown size={16} className="mr-1" />}
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 border-none shadow-md">
                    <CardHeader>
                        <CardTitle>Statistik Pengunjung</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#f3f4f6' }}
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="visitors" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle>Aktivitas Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-900 font-medium">Berita baru dipublikasikan</p>
                                        <p className="text-xs text-gray-500 mt-0.5">2 jam yang lalu oleh Admin</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
