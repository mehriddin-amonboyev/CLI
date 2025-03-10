import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDebtor = () => {
    const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
    const accessToken = tokenData.token?.access_token || "";

    return useQuery({
        queryKey: ["debtors"],
        queryFn: () =>
            request
                .get("/debtor/all", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
                .then((res) => res.data)
    });
};
