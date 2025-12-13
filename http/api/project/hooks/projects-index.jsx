import {useQuery} from "@tanstack/react-query";

export async function projectIndex() {
    const res = await fetch("https://ricksanchezz.ir/v1/project", {
        cache: "force-cache",
    });
    return res.json();
}

export const useGetProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: projectIndex,
        staleTime: 1000 * 60 * 5 // 5 minutes
    })
}
