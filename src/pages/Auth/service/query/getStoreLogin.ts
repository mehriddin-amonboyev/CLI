import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
import { login } from "../../../../types/login"

export const GetQueryLogin = () => {
    return useQuery({
        queryKey: ['user_login'],
        queryFn: () => 
            request.get<login>("/api/auth/login").then((res) => res.data)
    })
}