"use client";

import React from "react";
import PageLoader from "@/app/panel/_components/Loader";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Plus, SquarePen} from "lucide-react";
import Link from "next/link";
import {useGetProjects} from "@/http/api/project/hooks/projects-index";
import DeleteProjectModal from "@/app/panel/projects/_components/DeleteProjectModal";
import {useDeleteProject} from "@/http/api/project/hooks/projects-delete";

const ProjectsPage = () => {
    const TAB_HEADS = ["تصویر", "عنوان", "لوکیشن", "زمان", "عملیات"]
    const {data, isLoading} = useGetProjects();
    const {mutate, isPending} = useDeleteProject();

    if (isLoading) {
        return <PageLoader/>
    }

    const projects = data?.data;

    const formatShamsiDate = (dateInput) => {
        if (!dateInput) return "";

        return new Intl.DateTimeFormat("fa-IR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        }).format(new Date(dateInput));
    };

    const deleteProductHandler = (id) => {
        mutate(id)
    }

    return (<section className="p-6">
        <div className={"flex items-center justify-between mb-10"}>
            <h1 className="text-xl font-bold mb-4">لیست محصولات</h1>

            <Link href={"/panel/projects/create"}>
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
                    {projects?.map((project) => {
                        const shamsiDate = formatShamsiDate(project?.date)
                        return (
                            <TableRow key={project.id}>
                                <TableCell>
                                    <Image src={project.images[0]} width={60} height={60}
                                           alt={project?.projectTitle}/>
                                </TableCell>
                                <TableCell>
                                    <p className={"line-clamp-1"}>{project?.projectTitle}</p>
                                </TableCell>
                                <TableCell>
                                    <p className={"line-clamp-1"}>{project?.location}</p>
                                </TableCell>
                                <TableCell>
                                    <p className={"line-clamp-1"}>{shamsiDate}</p>
                                </TableCell>
                                <TableCell className={"flex items-center gap-2"}>
                                    <DeleteProjectModal
                                        loading={isPending}
                                        onConfirm={() => deleteProductHandler(product.id)}
                                    />
                                    <Button size={"sm"} className={"bg-orange-500 font-medium cursor-pointer"}>
                                        <SquarePen/>ویرایش
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    </section>);
};

export default ProjectsPage;