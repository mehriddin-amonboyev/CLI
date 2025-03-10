import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { StoreStatistic } from "../../../../types/statistic";


export const useGetStatistic = () => {
  return useQuery({
    queryKey: ["home-statistic"],
    queryFn: () =>
      request.get<StoreStatistic>("/stores/statistics").then((res) => res.data),
  });
};