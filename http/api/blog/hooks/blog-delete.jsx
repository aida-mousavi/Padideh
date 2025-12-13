import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function deleteBlog(id) {
  try {
    const response = await fetch(`https://ricksanchezz.ir/v1/blog/${id}`, {
      method: "DELETE",
    });

    return response.data;
  } catch (e) {
    throw e;
    console.log("DELETE BLOG ERROR", e);
  }
}

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: (res) => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success(res.data.message);
    },
  });
};
