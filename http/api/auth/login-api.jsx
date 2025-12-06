"use client";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export async function Login(data) {
    const res = await fetch("https://ricksanchezz.ir/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }

    return res.json();
}

export const useLogin = () => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn: Login,

        onError: (error) => {
            console.log("LOGIN ERROR:", error);
            toast.error(error.message || "خطا در ورود");
        },

        onSuccess: (data) => {
            console.log("LOGIN SUCCESS:", data);

            // Save token in cookie
            Cookies.set("access_token", data.data?.access_token, {
                expires: 7,       // 7 days
                secure: true,
                sameSite: "strict",
            });
            toast.success(data?.data?.message);
        },
    });
};
