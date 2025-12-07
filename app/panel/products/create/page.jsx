'use client';

import {useForm, useFieldArray} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {useCreateProduct} from "@/http/api/product/hooks/products-create";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
// --------------------------------------------------------------->

export default function CreatePage() {
    const {mutate, isPending} = useCreateProduct();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        watch
    } = useForm({
        defaultValues: {
            tags: [""],
            attributes: [{key: "", value: ""}]
        }
    });

    const {
        fields: tagFields,
        append: addTag,
        remove: removeTag
    } = useFieldArray({
        control,
        name: "tags"
    });

    const {
        fields: attributeFields,
        append: addAttribute,
        remove: removeAttribute
    } = useFieldArray({
        control,
        name: "attributes"
    });

    const onSubmit = (data) => {

        const formData = new FormData();

        // Simple Fields
        formData.append("slug", data.slug);
        formData.append("title", data.title);
        formData.append("sku", data.sku);
        formData.append("category", data.category);
        formData.append("brand", data.brand);
        formData.append("description", data.description);
        formData.append("content", data.content);

        // Tags Array
        data.tags.forEach(tag => {
            formData.append("tag[]", tag);
        });

        // Attribute Objects
        data.attributes.forEach(attr => {
            formData.append(
                "attribute[]",
                JSON.stringify(attr)
            );
        });

        // Images
        Array.from(data.images).forEach(file => {
            formData.append("image", file);
        });

        mutate(formData, {
            onSuccess: (res) => {
                router.push("/panel/products");
                toast.success(res.message);
            },
            onError: (err) => {
                toast.error(err.message);
                console.error("❌ Create error:", err);
            }
        });
    };

    return (
        <main className="max-w-3xl mx-auto p-8 space-y-8">

            <Card>
                <CardHeader>
                    <CardTitle>ایجاد محصول جدید</CardTitle>
                </CardHeader>

                <CardContent>
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        {/* BASIC FIELDS */}
                        <Input
                            placeholder="Slug"
                            {...register("slug")}
                        />

                        <Input
                            placeholder="Title"
                            {...register("title")}
                        />

                        <Input
                            placeholder="SKU"
                            {...register("sku")}
                        />

                        <Input
                            placeholder="Category"
                            {...register("category")}
                        />

                        <Input
                            placeholder="Brand"
                            {...register("brand")}
                        />

                        <Textarea
                            placeholder="Description"
                            {...register("description")}
                        />

                        <Textarea
                            placeholder="Content (HTML)"
                            {...register("content")}
                            rows={5}
                        />

                        {/* TAGS */}
                        <div className="space-y-2">

                            <h3 className="font-semibold">
                                Tags
                            </h3>

                            {tagFields.map((field, index) => (
                                <div
                                    key={field.id}
                                    className="flex gap-2"
                                >
                                    <Input
                                        placeholder={`Tag ${index + 1}`}
                                        {...register(
                                            `tags.${index}`
                                        )}
                                    />

                                    <Button
                                        type="button"
                                        variant="destructive"
                                        className={"text-white"}
                                        onClick={() =>
                                            removeTag(index)
                                        }
                                    >
                                        حذف
                                    </Button>
                                </div>
                            ))}

                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => addTag("")}
                            >
                                + افزودن تگ
                            </Button>

                        </div>

                        {/* ATTRIBUTES */}
                        <div className="space-y-2">

                            <h3 className="font-semibold">
                                Attributes
                            </h3>

                            {attributeFields.map((field, index) => (
                                <div
                                    key={field.id}
                                    className="grid grid-cols-2 gap-2"
                                >
                                    <Input
                                        placeholder="Key"
                                        {...register(
                                            `attributes.${index}.key`
                                        )}
                                    />

                                    <Input
                                        placeholder="Value"
                                        {...register(
                                            `attributes.${index}.value`
                                        )}
                                    />

                                    <Button
                                        type="button"
                                        variant="destructive"
                                        className="col-span-2"
                                        onClick={() =>
                                            removeAttribute(index)
                                        }
                                    >
                                        حذف Attribute
                                    </Button>
                                </div>
                            ))}

                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() =>
                                    addAttribute({
                                        key: "",
                                        value: ""
                                    })
                                }
                            >
                                + افزودن Attribute
                            </Button>

                        </div>

                        {/* IMAGES */}
                        <div>
                            <h3 className="font-semibold mb-2">
                                تصاویر محصول
                            </h3>

                            <Input
                                type="file"
                                multiple
                                {...register("images")}
                            />
                        </div>

                        {/* SUBMIT */}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            ثبت محصول
                        </Button>

                    </form>
                </CardContent>
            </Card>

        </main>
    );

}
