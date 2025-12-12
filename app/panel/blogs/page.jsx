"use client";

import React from "react";
import PageLoader from "@/app/panel/_components/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { useGetBlogs } from "@/http/api/blog/hooks/blogs-index";
import config from "@/config/appConfig";
import DeleteBlogModal from "./_components/DeleteBlogModal";
import { useDeleteBlog } from "@/http/api/blog/hooks/blog-delete";

const BlogsPage = () => {
  const TAB_HEADS = ["تصویر", "عنوان", "زمان", "تگ ها ", "عملیات"];
  const { data, isLoading } = useGetBlogs();
  const { mutate, isPending } = useDeleteBlog();

  if (isLoading) {
    return <PageLoader />;
  }

  const blogs = data?.data;

  const formatShamsiDate = (dateInput) => {
    if (!dateInput) return "";

    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(dateInput));
  };

  const deleteBlogHandler = (id) => {
    mutate(id);
  };

  return (
    <section className="p-6">
      <div className={"flex items-center justify-between mb-10"}>
        <h1 className="text-xl font-bold mb-4">لیست مقالات</h1>

        <Link href={"/panel/blogs/create"}>
          <Button className={"bg-green-700"}>
            <Plus />
          </Button>
        </Link>
      </div>
      <div>
        <Table>
          {/*Head Titles*/}
          <TableHeader>
            <TableRow>
              {TAB_HEADS?.map((column, i) => (
                <TableHead key={i} className="w-[200px] text-right">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs?.map((blog) => {
              const shamsiDate = formatShamsiDate(blog?.createdAt);
              return (
                <TableRow key={blog.id}>
                  <TableCell>
                    <Image
                      src={`${blog.image}`}
                      width={60}
                      height={60}
                      alt={blog?.blogTitle}
                    />
                  </TableCell>
                  <TableCell>
                    <p className={"line-clamp-1"}>{blog?.title}</p>
                  </TableCell>
                  <TableCell>
                    <p className={"line-clamp-1"}>{shamsiDate}</p>
                  </TableCell>
                  <TableCell>
                    <p className={"line-clamp-1"}>
                      {blog?.tags
                        ? blog?.tags?.map((tag, index) => (
                            <span
                              key={index}
                              className={"bg-gray-100 px-2 py-4 rounded-lg"}
                            >
                              {tag}
                            </span>
                          ))
                        : "-----"}
                    </p>
                  </TableCell>
                  <TableCell className={"flex items-center gap-2"}>
                    <DeleteBlogModal
                      loading={isPending}
                      onConfirm={() => deleteBlogHandler(blog.id)}
                    />
                    <Link href={`/panel/blogs/${blog.id}`}>
                      <Button
                        size={"sm"}
                        className={"bg-orange-500 font-medium cursor-pointer"}
                      >
                        <SquarePen />
                        ویرایش
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default BlogsPage;
