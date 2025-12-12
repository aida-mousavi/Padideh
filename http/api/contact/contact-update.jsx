import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export async function UpdateContact(formData) {
  try {
    const res = await fetch(`https://ricksanchezz.ir/v1/contacts`, {
      method: "PATCH",
      body: formData,
    });
    const result = await res.json();

    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const useUpdateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["contact"],
    mutationFn: ({ formData }) => UpdateContact(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["contact"]);
    },
  });
};
