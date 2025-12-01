"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Lock, Mail, AlertCircle } from "lucide-react";

const loginSchema = z.object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        setError(null);

        // Simulate API call
        setTimeout(() => {
            if (data.email === "admin@jakarta.go.id" && data.password === "password") {
                router.push("/admin");
            } else {
                setError("Email atau password salah");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg shadow-blue-600/20">
                        SD
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Sudin Pendidikan</h1>
                    <p className="text-gray-500">Wilayah II Jakarta Utara</p>
                </div>

                <Card className="shadow-xl border-gray-100">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Masuk Admin</CardTitle>
                        <CardDescription className="text-center">
                            Masukkan email dan password untuk mengakses dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {error && (
                                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    {error}
                                </div>
                            )}
                            <div className="space-y-2">
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        placeholder="nama@email.com"
                                        type="email"
                                        className="pl-10"
                                        {...register("email")}
                                        error={errors.email?.message}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        className="pl-10"
                                        {...register("password")}
                                        error={errors.password?.message}
                                    />
                                </div>
                            </div>
                            <Button type="submit" className="w-full" isLoading={isLoading}>
                                Masuk
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button variant="link" className="text-sm text-gray-500" size="sm">
                            Lupa Password?
                        </Button>
                    </CardFooter>
                </Card>

                <div className="mt-8 text-center text-xs text-gray-400">
                    &copy; 2025 Suku Dinas Pendidikan Wilayah II Jakarta Utara
                </div>
            </div>
        </div>
    );
}
