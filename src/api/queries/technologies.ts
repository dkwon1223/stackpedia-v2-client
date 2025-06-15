import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../client";
import { Technology } from "../../model/types";

export const useTechnologies = (categoryId?: string) => {
  const { data, isPending, isError, error, isFetching, refetch } = useQuery({
    queryKey: categoryId ? ["technologies", "category", categoryId] : ["technologies", "all"],
    queryFn: () => categoryId ? technologyService.getTechnologiesByCategory(categoryId) : technologyService.getTechnologies(),
  });

  return { data, isPending, isError, error, isFetching, refetch };
};

const technologyService = {
  getTechnologies: async (): Promise<Technology[]> => {
    const response = await apiClient.get<Technology[]>("/technology/all");
    return response.data;
  },
  getTechnologiesByCategory: async (
    categoryId: string
  ): Promise<Technology[]> => {
    const response = await apiClient.get<Technology[]>(
      `/technology/technologiesByCategory/${categoryId}`
    );
    return response.data;
  },
};
