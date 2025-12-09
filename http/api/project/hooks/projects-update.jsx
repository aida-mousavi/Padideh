import {useMutation, useQueryClient} from "@tanstack/react-query";

export async function updateProject(id, formData) {
    try {
        const response = await fetch(`https://ricksanchezz.ir/v1/project/${id}`, {
            method: "PATCH",
            body: formData,
        });

        return response;
    } catch (e) {
        throw e;
        console.log("UPDATE PROJECT ERROR", e);
    }
}

export const useUpdateProject = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['project', id],
        mutationFn: ({formData}) => updateProject(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries(["projects"]);
        },
    });
};
