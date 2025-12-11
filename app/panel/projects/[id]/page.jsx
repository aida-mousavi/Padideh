"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import DateInput from "@/components/DateInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// API Hooks
import { useGetProject } from "@/http/api/project/hooks/projects-show";
import { useUpdateProject } from "@/http/api/project/hooks/projects-update";

// ------------------------------------------------------------------------------------------------>

const SingleProjectPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data, isLoading } = useGetProject(id);
  const { mutate, isPending } = useUpdateProject();

  // ⭐ داخل imageList ذخیره می‌کنیم:
  // { url, file } → url برای preview ، file برای ارسال
  const [imageList, setImageList] = useState([]);

  const { register, handleSubmit, control, reset, watch, setValue } = useForm({
    defaultValues: {
      projectTitle: "",
      location: "",
      date: "",
      description: "",
      works: "",
      area: "",
      areaDescription: "",
      duration: "",
      durationDescription: "",
      images: [],
    },
  });

  // -------------------------------------------------------------
  // وقتی دیتا از سرور آمد → فرم را پر کن
  // -------------------------------------------------------------

  useEffect(() => {
    if (data) {
      reset({
        projectTitle: data.projectTitle,
        location: data.location,
        date: data.date,
        description: data.description,
        works: data.works,
        area: data.area,
        areaDescription: data.areaDescription,
        duration: data.duration,
        durationDescription: data.durationDescription,
        images: data.images || [],
      });

      // تصاویر قبلی سرور را داخل imageList ذخیره کن
      if (data.images?.length) {
        const serverImages = data.images.map((img) => ({
          url: img, // اگر نیاز داری اینجا urlImage + img بزن
          file: null,
        }));

        setImageList(serverImages);
      }
    }
  }, [data, reset]);

  // -------------------------------------------------------------
  // اضافه کردن عکس جدید
  // -------------------------------------------------------------

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));

    setImageList((prev) => [...prev, ...newImages]);

    setValue("images", [...watch("images"), ...files]);
  };

  // -------------------------------------------------------------
  // حذف عکس (قدیمی یا جدید)
  // -------------------------------------------------------------

  const handleRemoveImage = (index) => {
    setImageList((prev) => prev.filter((_, i) => i !== index));

    const currentImages = watch("images");
    currentImages.splice(index, 1);
    setValue("images", [...currentImages]);
  };

  // -------------------------------------------------------------
  // ارسال فرم
  // -------------------------------------------------------------

  const onSubmit = (values) => {
    const fd = new FormData();

    fd.append("projectTitle", values.projectTitle);
    fd.append("location", values.location);
    fd.append("date", values.date);
    fd.append("description", values.description);
    fd.append("works", values.works);
    fd.append("area", values.area);
    fd.append("areaDescription", values.areaDescription);
    fd.append("duration", values.duration);
    fd.append("durationDescription", values.durationDescription);

    // فقط عکس‌های جدید (file !== null)
    imageList.forEach((img) => {
      if (img.file) fd.append("images", img.file);
    });

    mutate(
      { id, body: fd },
      {
        onSuccess: () => {
          toast.success("پروژه با موفقیت آپدیت شد");
          router.push("/panel/projects");
        },
        onError: (err) => {
          toast.error(err?.message || "خطا در آپدیت پروژه");
        },
      }
    );
  };

  // -------------------------------------------------------------

  if (isLoading) return <div className="p-10">در حال بارگذاری...</div>;

  // -------------------------------------------------------------
  return (
    <main className="max-w-6xl mx-auto p-8 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>ویرایش پروژه</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="عنوان پروژه" {...register("projectTitle")} />
            <Input placeholder="لوکیشن" {...register("location")} />

            <DateInput
              name="date"
              label="تاریخ پروژه"
              control={control}
              required
            />

            <Input placeholder="توضیحات" {...register("description")} />
            <Input placeholder="فعالیت‌ها" {...register("works")} />
            <Input placeholder="مساحت" {...register("area")} />
            <Input
              placeholder="توضیحات زمین"
              {...register("areaDescription")}
            />
            <Input placeholder="زمان انجام" {...register("duration")} />
            <Input
              placeholder="توضیحات زمان انجام"
              {...register("durationDescription")}
            />

            {/* تصاویر */}
            <div>
              <h3 className="font-semibold mb-2">تصاویر پروژه</h3>

              <Input type="file" multiple onChange={handleFileChange} />

              {imageList.length > 0 && (
                <div className="mt-3 flex gap-3 flex-wrap">
                  {imageList.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img.url}
                        className="w-24 h-24 object-cover border rounded"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        className="absolute top-0 right-0 p-1 text-xs"
                        onClick={() => handleRemoveImage(index)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              آپدیت پروژه
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default SingleProjectPage;
