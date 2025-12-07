"use client";

import React from "react";
import {useGetProduct} from "@/http/api/product/hooks/products-index";
import PageLoader from "@/app/panel/_components/Loader";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import config from "@/config/appConfig";
import {Button} from "@/components/ui/button";
import {Plus, SquarePen, Trash2} from "lucide-react";
import Link from "next/link";
// ------------------------------------------------------------------------------------->

const ProductsPage = () => {
    const TAB_HEADS = ["تصویر", "عنوان", "برند", "دسته بندی", "عملیات"]

    const {data, isLoading} = useGetProduct();

    if (isLoading) {
        return <PageLoader/>
    }

    const products = data?.data;


    return (<section className="p-6">
        <div className={"flex items-center justify-between mb-10"}>
            <h1 className="text-xl font-bold mb-4">لیست محصولات</h1>

            <Link href={"/panel/products/create"}>
                <Button className={"bg-green-700"}>
                    <Plus/>
                </Button>
            </Link>
        </div>
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
                                {product.image ? (
                                    <Image src={config.urlImage + product.image[0]} width={60} height={60}
                                           alt={product?.title}/>
                                ) : null}
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
                                <Button size={"sm"} className={"bg-red-600 font-medium cursor-pointer"}>
                                    <Trash2/> حذف</Button>
                                <Button size={"sm"} className={"bg-orange-500 font-medium cursor-pointer"}> <SquarePen/>ویرایش
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
