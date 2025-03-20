import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useAllPayments = () => {
    const token = JSON.parse(localStorage.getItem("token") || '{}');
    return useQuery({
        queryKey: ["payments"],
        queryFn: () =>
            request
                .get("/stores/allpayment", {
                    headers: {
                        Authorization: `Bearer ${token.token.access_token}`
                    }
                })
                .then((res) => res.data)
    })
}