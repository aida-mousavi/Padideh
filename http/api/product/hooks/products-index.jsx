import {useQuery} from "@tanstack/react-query";

export async function productIndex() {
    const res = await fetch("https://ricksanchezz.ir/v1/product");
    const result = await res.json()

    return result.data;
}


export const useGetProduct = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: productIndex,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })
}