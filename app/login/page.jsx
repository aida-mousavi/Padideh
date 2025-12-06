"use client";

import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useLogin} from "@/http/api/auth/login-api";


// ✅ Validation Schema
const loginSchema = z.object({
    mobile: z
        .string()
        .min(1, "شماره را وارد کنید"),
    password: z.string().min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
});

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const {mutate, isPending} = useLogin();

    // ✅ Submit Handler
    const onSubmit = async (data) => {
        mutate(data);
    };

    return (

        <main className="h-screen w-full flex items-center justify-center bg-muted">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <CardTitle>ورود به حساب کاربری</CardTitle>
                    <CardDescription>
                        شماره تلفن و رمز عبور خود را وارد کنید
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Email */}
                        <div className="space-y-1">
                            <Label htmlFor="mobile">شماره تلفن</Label>
                            <Input
                                id="mobile"
                                type="text"
                                placeholder="+9121212121"
                                {...register("mobile")}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.mobile.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <Label htmlFor="password">رمز عبور</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="******"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Button */}
                        <Button
                            type="submit"
                            className="w-full mt-4"
                            disabled={isPending}
                        >
                            {isPending ? "در حال ورود..." : "ورود"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
