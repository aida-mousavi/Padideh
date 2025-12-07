import {useMutation} from "@tanstack/react-query";

export async function createProduct(formData) {
    try {
        const response = await fetch("https://ricksanchezz.ir/v1/product", {
            method: "POST",
            body: formData,
        });

        return response.data;
    } catch (e) {
        throw e;
        console.log("CREATE PRODUCT ERROR", e);
    }
}

export const useCreateProduct = () => {
    return useMutation({
        mutationFn: createProduct
    });
};
