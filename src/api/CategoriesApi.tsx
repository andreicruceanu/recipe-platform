import { Categories } from "@/lib/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetCategories = () => {
  const getCategories = async (): Promise<Categories[]> => {
    const response = await fetch(`${API_BASE_URL}/api/categories`);

    if (!response.ok) {
      throw new Error("Failed to get categories");
    }

    return response.json();
  };

  const { data: categories, isLoading } = useQuery(
    "fetchCategories",
    getCategories
  );

  return { categories, isLoading };
};
