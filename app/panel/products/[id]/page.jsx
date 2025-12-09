'use client';

import {useEffect, useState} from "react";
import {useForm, useFieldArray} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useParams, useRouter} from "next/navigation";
import {useGetProduct} from "@/http/api/product/hooks/products-show";
import config from "@/config/appConfig";
import PageLoader from "@/app/panel/_components/Loader";
import {useUpdateProduct} from "@/http/api/product/hooks/products-update";
import toast from "react-hot-toast";
// ------------------------------------------------------------------------------------------->

const SinglePage = () => {
    const {id} = useParams();
    const {data, isLoading} = useGetProduct(id);
    const {mutate, isPending} = useUpdateProduct(id);
    const router = useRouter();

    const [imageList, setImageList] = useState([]);

    const {register, handleSubmit, control, reset, watch, setValue} = useForm({
        defaultValues: {
            slug: "",
            title: "",
            sku: "",
            category: "",
            brand: "",
            description: "",
            content: "",
            tags: [""],
            attributes: [{key: "", value: ""}],
            images: [],
        },
    });

    // Tags FieldArray
    const {fields: tagFields, append: addTag, remove: removeTag} = useFieldArray({
        control,
        name: "tags",
    });

    // Attributes FieldArray
    const {fields: attributeFields, append: addAttribute, remove: removeAttribute} = useFieldArray({
        control,
        name: "attributes",
    });

    useEffect(() => {
        if (data?.data) {
            const product = data.data;

            reset({
                slug: product.slug || "",
                title: product.title || "",
                sku: product.sku || "",
                category: product.category || "",
                brand: product.brand || "",
                description: product.description || "",
                content: product.content || "",
                tags: product.tag?.length ? product.tag : [""],
                attributes: product.attribute?.length ? product.attribute : [{key: "", value: ""}],
                images: product.image || [],
            });

            const initialImages = product.image?.map(img => ({url: config.urlImage + img, file: null})) || [];
            setImageList(initialImages);
        }
    }, [data, reset]);

    const onSubmit = (data) => {

        const fd = new FormData();

        fd.append("slug", data.slug);
        fd.append("title", data.title);
        fd.append("sku", data.sku);
        fd.append("category", data.category);
        fd.append("brand", data.brand);
        fd.append("description", data.description);
        fd.append("content", data.content);

        // Tags
        data.tags.forEach((tag, i) => {
            fd.append(`tags[${i}]`, tag);
        });

        // Attributes
        data.attributes.forEach((attr, i) => {
            fd.append(`attributes[${i}][key]`, attr.key);
            fd.append(`attributes[${i}][value]`, attr.value);
        });

        imageList.forEach((img) => {
            if (img.file) {
                fd.append("images[]", img.file);
            }
        });

        mutate(
            {formData: fd},
            {
                onSuccess: (res) => {
                   toast.success("با موفقیت ویرایش شد");
                    router.push("/panel/products")
                },
                onError: (err) => {
                   toast.error(err.message);
                }
            }
        );
    };


    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map(file => ({
            url: URL.createObjectURL(file),
            file: file
        }));
        setImageList(prev => [...prev, ...newImages]);

        setValue("images", [...watch("images"), ...files]);
    };

    const handleRemoveImage = (index) => {
        setImageList(prev => prev.filter((_, i) => i !== index));

        const currentImages = watch("images");
        currentImages.splice(index, 1);
        setValue("images", [...currentImages]);
    };

    if (isLoading) {
        return <PageLoader/>;
    }

    return (
        <main className="max-w-3xl mx-auto p-8 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>ویرایش محصول</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Slug" {...register("slug")} />
                        <Input placeholder="Title" {...register("title")} />
                        <Input placeholder="SKU" {...register("sku")} />
                        <Input placeholder="Category" {...register("category")} />
                        <Input placeholder="Brand" {...register("brand")} />
                        <Textarea placeholder="Description" {...register("description")} />
                        <Textarea placeholder="Content (HTML)" {...register("content")} rows={5}/>

                        {/* TAGS */}
                        <div className="space-y-2">
                            <h3 className="font-semibold">Tags</h3>
                            {tagFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <Input placeholder={`Tag ${index + 1}`} {...register(`tags.${index}`)} />
                                    <Button type="button" variant="destructive" onClick={() => removeTag(index)}>
                                        حذف
                                    </Button>
                                </div>
                            ))}
                            <Button type="button" variant="secondary" onClick={() => addTag("")}>
                                + افزودن تگ
                            </Button>
                        </div>

                        {/* ATTRIBUTES */}
                        <div className="space-y-2">
                            <h3 className="font-semibold">Attributes</h3>
                            {attributeFields.map((field, index) => (
                                <div key={field.id} className="grid grid-cols-2 gap-2">
                                    <Input placeholder="Key" {...register(`attributes.${index}.key`)} />
                                    <Input placeholder="Value" {...register(`attributes.${index}.value`)} />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        className="col-span-2"
                                        onClick={() => removeAttribute(index)}
                                    >
                                        حذف Attribute
                                    </Button>
                                </div>
                            ))}
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => addAttribute({key: "", value: ""})}
                            >
                                + افزودن Attribute
                            </Button>
                        </div>

                        {/* IMAGES */}
                        <div>
                            <h3 className="font-semibold mb-2">تصاویر محصول</h3>
                            <Input type="file" multiple onChange={handleFileChange}/>

                            {/* Preview images */}
                            {imageList.length > 0 && (
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {imageList.map((img, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={img.url}
                                                alt={`تصویر ${index + 1}`}
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

                        {/* SUBMIT */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            بروز رسانی محصول
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
};

export default SinglePage;
