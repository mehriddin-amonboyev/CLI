import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useProfile = () => {
    const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
    return useQuery({
        queryKey: ["profile"],
        queryFn: () =>
            request
                .get(`/stores/${tokenData.token.store_id}`, {
                    headers: {
                        Authorization: `Bearer ${tokenData.token?.access_token}`
                    }
                })
                .then((res) => res.data)
    });
};