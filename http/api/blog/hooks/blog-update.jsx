import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function updateBlog(id, formData) {
  try {
    const response = await fetch(`https://ricksanchezz.ir/v1/blog/${id}`, {
      method: "PATCH",
      body: formData,
    });

    return response;
  } catch (e) {
    throw e;
    console.log("UPDATE BLOG ERROR", e);
  }
}

export const useUpdateBlog = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["blog", id],
    mutationFn: ({ formData }) => updateBlog(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });
};
