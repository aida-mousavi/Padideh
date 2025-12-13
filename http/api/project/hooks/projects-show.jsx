import {useQuery} from "@tanstack/react-query";

export async function ProjectShow(id) {
    try {
        const res = await fetch(`https://ricksanchezz.ir/v1/project/${id}`);
        const result = await res.json()

        return result.data;
    } catch (err) {
        console.log(err)
        throw err;
    }
}


export const useGetProject = (id) => {
    return useQuery({
        queryKey: ["project", id],
        queryFn: () => ProjectShow(id),
    })
}