import { useMutation } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useCreateDebtor = () => {
    return useMutation({
        mutationFn: (data: {
            full_name: string,
            addres: string,
            description: string,
            store_id: string,
        }) =>
            request.post('/debtor/create', data).then((res) => res.data)
    })
}