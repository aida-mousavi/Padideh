"use client";

import React from "react";
import {useGetProduct} from "@/http/api/product/hooks/products-index";
import PageLoader from "@/app/panel/_components/Loader";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import config from "@/config/appConfig";
import {Button} from "@/components/ui/button";
import {SquarePen, Trash2} from "lucide-react";
// ------------------------------------------------------------------------------------->

const ProductsPage = () => {
    const TAB_HEADS = ["تصویر", "عنوان", "برند", "دسته بندی", "عملیات"]

    const {data, isLoading} = useGetProduct();

    if (isLoading) {
        return <PageLoader/>
    }

    const products = data?.data;

    console.log(products)


    return (<section className="p-6">
        <h1 className="text-xl font-bold mb-4">لیست محصولات</h1>
        <div>
            <Table>
                {/*Head Titles*/}
                <TableHeader>
                    <TableRow>
                        {TAB_HEADS?.map((column, i) => (
                            <TableHead key={i} className="w-[50px] text-right">{column}</TableHead>))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <Image src={config.urlImage + product.image[0]} width={60} height={60}
                                       alt={product?.title}/>
                            </TableCell>
                            <TableCell>
                                <p className={"line-clamp-1"}>{product?.title}</p>
                            </TableCell>
                            <TableCell>
                                <p className={"line-clamp-1"}>{product?.brand}</p>
                            </TableCell>
                            <TableCell>
                                <p className={"line-clamp-1"}>{product?.category}</p>
                            </TableCell>
                            <TableCell className={"flex items-center gap-2"}>
                                <Button size={"sm"} className={"bg-red-600 font-medium"}> <Trash2/> حذف</Button>
                                <Button size={"sm"} className={"bg-orange-500 font-medium"}> <SquarePen/>ویرایش
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </section>);
};

export default ProductsPage;
