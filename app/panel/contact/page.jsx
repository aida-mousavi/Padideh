"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useGetContact } from "@/http/api/contact/contact-show";
import { useUpdateContact } from "@/http/api/contact/contact-update";

export default function ContactPage() {
  const { data, isLoading } = useGetContact();
  const { mutate, isPending } = useUpdateContact();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      phone: "",
      email: "",
      company_address: "",
      postal_code: "",
      address: "",
    },
  });

  // -------------------------------------------------------------
  // وقتی دیتا از سرور آمد → فرم را پر کن
  // -------------------------------------------------------------
  useEffect(() => {
    if (data) {
      reset({
        phone: data.phone || "",
        email: data.email || "",
        company_address: data.company_address || "",
        postal_code: data.postal_code || "",
        address: data.address || "",
      });
    }
  }, [data, reset]);

  // -------------------------------------------------------------
  // ارسال فرم
  // -------------------------------------------------------------
  const onSubmit = (values) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("اطلاعات با موفقیت آپدیت شد");
      },
      onError: (err) => {
        toast.error(err?.message || "خطا در آپدیت اطلاعات");
      },
    });
  };

  // -------------------------------------------------------------
  if (isLoading) return <div className="p-8">در حال بارگذاری...</div>;

  // -------------------------------------------------------------
  return (
    <main className="max-w-3xl mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>اطلاعات تماس</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="شماره تلفن" {...register("phone")} />
            <Input placeholder="ایمیل" {...register("email")} />
            <Input placeholder="آدرس شرکت" {...register("company_address")} />
            <Input placeholder="کد پستی" {...register("postal_code")} />
            <Input placeholder="آدرس" {...register("address")} />

            <Button type="submit" className="w-full" disabled={isPending}>
              آپدیت اطلاعات
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
