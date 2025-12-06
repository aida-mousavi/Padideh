import {useQuery} from "@tanstack/react-query";

export async function blogIndexApi() {
    const res = await fetch("https://ricksanchezz.ir/v1/blog");
    const result = await res.json()


    return result;
}


export const useGetBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: blogIndexApi,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })
}