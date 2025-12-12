import { useQuery } from "@tanstack/react-query";

export async function GetContact() {
  try {
    const res = await fetch(`https://ricksanchezz.ir/v1/contacts`);
    const result = await res.json();

    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const useGetContact = () => {
  return useQuery({
    queryKey: ["contact"],
    queryFn: GetContact,
  });
};
