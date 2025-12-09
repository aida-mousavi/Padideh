"use client";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";

import {Button} from "@/components/ui/button";
import {Trash2} from "lucide-react";

const DeleteProjectModal = ({onConfirm, loading}) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="sm" className="bg-red-600" dir={"rtl"}>
                    <Trash2/>
                    حذف
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        آیا مطمئن هستید؟
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        با حذف این پروژه اطلاعات آن به صورت کامل پاک می‌شود و قابل بازگشت نیست.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="flex gap-2">
                    <AlertDialogCancel>
                        انصراف
                    </AlertDialogCancel>

                    <AlertDialogAction
                        disabled={loading}
                        onClick={onConfirm}
                        className="bg-red-600 hover:bg-red-700"
                    >
                        بله، حذف شود
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteProjectModal;
