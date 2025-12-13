import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function deleteProject(id) {
    try {
        const response = await fetch(`https://ricksanchezz.ir/v1/project/${id}`, {
            method: "DELETE",
        });

        return response.data;
    } catch (e) {
        throw e;
        console.log("DELETE PROJECT ERROR", e);
    }
}

export const useDeleteProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProject,
        onSuccess: (res) => {
            queryClient.invalidateQueries(["projects"]);
            toast.success(res.data.message);
        }
    });
};
