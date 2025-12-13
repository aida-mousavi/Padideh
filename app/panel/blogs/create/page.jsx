"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
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

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      content: "",
      desc: "",
      image: null,
    },
  });

  // -------------------------------------------------------------
  // ADD TAG
  // -------------------------------------------------------------
  const addTag = () => {
    if (!tagInput.trim()) return;

    if (!tags.includes(tagInput.trim())) {
      setTags((prev) => [...prev, tagInput.trim()]);
    }

    setTagInput("");
  };

  // ENTER KEY ADD TAG
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  // REMOVE TAG
  const removeTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  // -------------------------------------------------------------
  // SUBMIT FORM
  // -------------------------------------------------------------
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("desc", data.desc);

    // tags array
    tags.forEach((tag) => {
      formData.append("tags", tag);
    });

    // image upload
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    mutate(formData, {
      onSuccess: (res) => {
        toast.success(res.message || "بلاگ با موفقیت ایجاد شد");
        router.push("/panel/blogs");
      },
      onError: (err) => {
        toast.error(err.message || "خطا در ایجاد بلاگ");
      },
    });
  };

  // -------------------------------------------------------------
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

            {/* SHORT DESCRIPTION */}
            <Textarea
              rows={3}
              placeholder="توضیح کوتاه (desc)..."
              {...register("desc", { required: true })}
            />

            {/* CONTENT */}
            <Textarea
              rows={7}
              placeholder="متن کامل بلاگ..."
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

              {/* TAG LIST */}
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
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isPending}>
              ایجاد بلاگ
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
