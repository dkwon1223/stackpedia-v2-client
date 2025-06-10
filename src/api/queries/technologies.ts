import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../client"
import { Technology } from "../../model/types";

export const useTechnologies = () => {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['technologies'],
        queryFn: technologyService.getTechnologies,
    });

    return { data, isPending, isError, error };
}

const technologyService = {

    getTechnologies: async (): Promise<Technology[]> => {
        const response = await apiClient.get<Technology[]>("/technology/all");
        return response.data;
    }
}