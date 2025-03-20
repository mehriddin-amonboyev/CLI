import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
import { useParams } from "react-router-dom";

export const useDebCount = () => {
    const token = JSON.parse(localStorage.getItem("token") || '{}');
    const param = useParams()
    return useQuery({
        queryKey: ["deily-debt"],
        queryFn: () =>
            request
                .get(`/stores/deily-debt?date=${param}`, {
                    headers: {
                        Authorization: `Bearer ${token.token.access_token}`
                    }
                })
                .then((res) => res.data)
    })
}