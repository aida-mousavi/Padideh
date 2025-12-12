"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// API Hooks
import { useGetBlog } from "@/http/api/blog/hooks/blog-show";
import { useUpdateBlog } from "@/http/api/blog/hooks/blog-update";

// -------------------------------------------------------------------------------------------->

export default function SingleBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading } = useGetBlog(id);
  const { mutate, isPending } = useUpdateBlog(id);

  const [previewImage, setPreviewImage] = useState(null);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: "",
      content: "",
      image: null,
    },
  });

  // -------------------------------------------------------------
  // وقتی دیتا از سرور آمد، فرم را پر کن
  // -------------------------------------------------------------

  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        content: data.content,
      });

      if (data.image) {
        setPreviewImage(data.image); // url
      }
    }
  }, [data, reset]);

  // -------------------------------------------------------------
  // انتخاب عکس جدید
  // -------------------------------------------------------------

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setValue("image", file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // -------------------------------------------------------------
  // ارسال فرم
  // -------------------------------------------------------------

  const onSubmit = (values) => {
    const fd = new FormData();
    fd.append("title", values.title);
    fd.append("content", values.content);
    if (values.image instanceof File) {
      fd.append("image", values.image);
    }

    mutate(
      { body: fd },
      {
        onSuccess: (res) => {
          toast.success("بلاگ با موفقیت آپدیت شد");
          router.push("/panel/blogs");
        },
        onError: (err) => {
          toast.error(err?.message || "خطا در آپدیت بلاگ");
        },
      }
    );
  };

  // -------------------------------------------------------------

  if (isLoading) return <div className="p-8">در حال بارگذاری...</div>;

  // -------------------------------------------------------------
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>ویرایش بلاگ</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* TITLE */}
            <Input
              placeholder="عنوان بلاگ"
              {...register("title", { required: true })}
            />

            {/* CONTENT */}
            <Textarea
              rows={6}
              placeholder="متن بلاگ..."
              {...register("content", { required: true })}
            />

            {/* IMAGE UPLOAD + PREVIEW */}
            <div className="space-y-3">
              <h3 className="font-semibold">تصویر بلاگ</h3>

              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              {previewImage && (
                <img
                  src={previewImage}
                  className="w-40 h-40 object-cover rounded border"
                />
              )}
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isPending}>
              آپدیت بلاگ
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
