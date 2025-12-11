"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useCreateBlog } from "@/http/api/blog/hooks/blog-create";
// ----------------------------------------------------------------------------------------------->

export default function CreateBlogPage() {
  const router = useRouter();

  const { mutate, isPending } = useCreateBlog();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      content: "",
      image: null,
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    mutate(formData, {
      onSuccess: (res) => {
        console.log(res);
        toast.success(res.message);
        router.push("/panel/blogs");
      },
      onError: (err) => {
        console.log("ERROR", err);
        toast.error(err.message);
      },
    });
  };

  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>ایجاد بلاگ جدید</CardTitle>
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

            {/* IMAGE */}
            <div>
              <h3 className="font-semibold mb-2">تصویر بلاگ</h3>
              <Input
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
              />
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isPending}>
              ثبت بلاگ
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
