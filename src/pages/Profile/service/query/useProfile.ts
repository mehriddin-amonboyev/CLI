import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useProfile = () => {
    const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
    const accessToken = tokenData.token?.access_token || "";
    const store_id = tokenData.token.store_id;
    return useQuery({
        queryKey: ["wallet"],
        queryFn: () =>
            request
                .get(`/stores/${store_id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then((res) => res.data)
    });
};