import {useMutation, useQueryClient} from "@tanstack/react-query";

export async function createProject(formData) {
    const response = await fetch("https://ricksanchezz.ir/v1/project", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        const err = await response.json();
        throw err;
    }

    return response.json();
}


export const useCreateProject = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (formData) => createProject(formData),
        onSuccess: () => {
            queryClient.invalidateQueries(["projects"]);
        },
    });
};
