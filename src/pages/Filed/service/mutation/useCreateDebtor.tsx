import { useMutation } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useCreateDebtor = () => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');

    return useMutation({
        mutationFn: (data: {
            full_name: string,
            address: string,
            description: string,
            store_id: string,
        }) =>
            request
                .post('/debtor/create', data,
                    {
                        headers: {
                            Authorization: `Bearer ${token.token.access_token}`
                        }
                    }
                )
                .then((res) => res.data)
    })
}