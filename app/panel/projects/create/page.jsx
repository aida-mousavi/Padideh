"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import DateInput from "@/components/DateInput";
import {useCreateProject} from "@/http/api/project/hooks/projects-create";
import toast from "react-hot-toast";

// ----------------------------------------------------


const CreatePage = () => {
    const router = useRouter();
    const {mutate, isPending} = useCreateProject()

    const [previewImages, setPreviewImages] = useState([]);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        control,
        formState: {errors},
    } = useForm();

    // Handle submit
    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("projectTitle", data.projectTitle);
        formData.append("location", data.location);
        formData.append("date", data.date);
        formData.append("description", data.description);
        formData.append("works", data.works);
        formData.append("area", data.area);
        formData.append("areaDescription", data.areaDescription);
        formData.append("duration", data.duration);
        formData.append("durationDescription", data.durationDescription);

        Array.from(data.images || []).forEach((img) => {
            formData.append("images", img);
        });

        mutate(formData, {
            onSuccess: (res) => {
                console.log("✅ SUCCESS", res);
                toast.success(res.message);
                router.push("/panel/projects");
                reset();
            },
            onError: (err) => {
                toast.error(err.message);
                console.error("❌ Create error:", err);
            }
        });
    };

    // Handle preview images
    const handleImages = (e) => {
        const files = Array.from(e.target.files || []);
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    return (
        <main className="max-w-6xl mx-auto p-8 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>ایجاد / پروژه</CardTitle>
                </CardHeader>

                <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="عنوان پروژه" {...register("projectTitle", {required: true})} />

                        <Input placeholder="لوکیشن" {...register("location")} />

                        <DateInput
                            name="date"
                            control={control}
                            label="تاریخ پروژه"
                            required
                        />

                        <Input placeholder="توضیحات" {...register("description")} />

                        <Input placeholder="فعالیت‌ها" {...register("works")} />

                        <Input placeholder="مساحت"  {...register("area")} />

                        <Input placeholder="توضیحات زمین" {...register("areaDescription")} />
                        <Input placeholder="زمان انجام" {...register("duration")} />
                        <Input placeholder="توضیحات زمان انجام" {...register("durationDescription")} />

                        {/* Images */}
                        <div>
                            <h3 className="font-semibold mb-2">تصاویر پروژه</h3>

                            <Input
                                type="file"
                                multiple
                                {...register("images")}
                                onChange={handleImages}
                            />
                        </div>

                        {/* Previews */}
                        {previewImages.length > 0 && (
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {previewImages.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        className="w-24 h-24 object-cover rounded border"
                                        alt={`preview-${i}`}
                                    />
                                ))}
                            </div>
                        )}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            ثبت پروژه
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
};

export default CreatePage;
