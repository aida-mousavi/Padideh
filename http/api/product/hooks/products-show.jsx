import {useQuery} from "@tanstack/react-query";

export async function ProductShow(id) {
    try {
        const res = await fetch(`https://ricksanchezz.ir/v1/product/${id}`);
        const result = await res.json()

        return result.data;
    } catch (err) {
        console.log(err)
        throw err;
    }
}


export const useGetProduct = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => ProductShow(id),
    })
}