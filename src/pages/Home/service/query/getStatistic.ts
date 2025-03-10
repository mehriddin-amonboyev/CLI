import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const token = JSON.parse(localStorage.getItem('token') || '{}')
export const useGetStatistic = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: () =>
      request
        .get<any>("/stores/wallet", {
          headers: {
            Authorization: `Bearer ${token.token.access_token}`
          }
        })
        .then((res) => {res.data}),
  });
};