import { useQuery } from "@tanstack/react-query";

export async function ProductBlog(id) {
  try {
    const res = await fetch(`https://ricksanchezz.ir/v1/blog/${id}`);
    const result = await res.json();

    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const useGetBlog = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => ProductBlog(id),
  });
};
