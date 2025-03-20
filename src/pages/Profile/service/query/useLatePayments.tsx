import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useLatePayment = () => {
    const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
    return useQuery({
        queryKey: ["late-payments"],
        queryFn: () =>
            request
                .get(`/stores/late-payments`, {
                    headers: {
                        Authorization: `Bearer ${tokenData.token?.access_token}`
                    }
                })
                .then((res) => res.data)
    });
};