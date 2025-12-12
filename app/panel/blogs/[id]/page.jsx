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

export default function SingleBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading } = useGetBlog(id);
  const { mutate, isPending } = useUpdateBlog(id);

  const [previewImage, setPreviewImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: "",
      content: "",
      desc: "",
      image: null,
    },
  });

  // -------------------------------------------------------------
  // وقتی دیتا از سرور آمد
  // -------------------------------------------------------------
  useEffect(() => {
    if (!data) return;

    reset({
      title: data.title,
      content: data.content,
      desc: data.desc || "",
    });

    if (data.tags?.length) setTags(data.tags);

    if (data.image) {
      const url = data.image.startsWith("http")
        ? data.image
        : `https://nit6.ir/${data.image}`;
      setPreviewImage(url);
    }
  }, [data, reset]);

  // -------------------------------------------------------------
  // اضافه کردن تگ
  // -------------------------------------------------------------
  const addTag = () => {
    const trimmed = tagInput.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    setTags((prev) => [...prev, trimmed]);
    setTagInput("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const removeTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

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
    fd.append("desc", values.desc);

    // تگ‌ها
    tags.forEach((tag) => fd.append("tags", tag));

    if (values.image instanceof File) fd.append("image", values.image);

    mutate(
      { body: fd },
      {
        onSuccess: () => {
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

  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>ویرایش بلاگ</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* TITLE */}
            <Input placeholder="عنوان بلاگ" {...register("title")} />

            {/* CONTENT */}
            <Textarea
              rows={6}
              placeholder="متن بلاگ..."
              {...register("content")}
            />

            {/* DESC */}
            <Textarea
              rows={3}
              placeholder="توضیحات کوتاه..."
              {...register("desc")}
            />

            {/* TAGS */}
            <div>
              <h3 className="font-semibold mb-2">تگ‌ها</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="تگ جدید..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleEnter}
                />
                <Button type="button" onClick={addTag}>
                  اضافه
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="text-red-500 font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
