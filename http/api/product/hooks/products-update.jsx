import {useMutation, useQueryClient} from "@tanstack/react-query";

export async function updateProduct(id, formData) {
    try {
        const response = await fetch(`https://ricksanchezz.ir/v1/product/${id}`, {
            method: "PATCH",
            body: formData,
        });

        return response;
    } catch (e) {
        throw e;
        console.log("UPDATE PRODUCT ERROR", e);
    }
}

export const useUpdateProduct = (id) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['product', id],
        mutationFn: ({formData}) => updateProduct(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        },
    });
};
