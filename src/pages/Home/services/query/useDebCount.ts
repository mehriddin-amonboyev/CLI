import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useDebCount = () => {
    const token = JSON.parse(localStorage.getItem("token") || '{}');
    return useQuery({
        queryKey: ["debtor-count"],
        queryFn: () =>
            request
                .get("/stores/debtor-count", {
                    headers: {
                        Authorization: `Bearer ${token.token.access_token}`
                    }
                })
                .then((res) => res.data)
    })
}