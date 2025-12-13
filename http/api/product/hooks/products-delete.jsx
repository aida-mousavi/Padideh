import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function deleteProduct(id) {
    try {
        const response = await fetch(`https://ricksanchezz.ir/v1/product/${id}`, {
            method: "DELETE",
        });

        return response.data;
    } catch (e) {
        throw e;
        console.log("DELETE PRODUCT ERROR", e);
    }
}

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: (res) => {
            queryClient.invalidateQueries(["products"]);
            toast.success(res.data.message);
        }
    });
};
