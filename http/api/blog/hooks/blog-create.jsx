import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function createBlog(formData) {
  try {
    const response = await fetch("https://ricksanchezz.ir/v1/blog", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || "Server Error");
    }

    return response.json();
  } catch (e) {
    console.log("CREATE BLOG ERROR", e);
    throw e;
  }
}

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });
};
