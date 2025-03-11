import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useCreateDebts = () => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');

    return useMutation({
        mutationFn: (data: {
            debt_date: Date,
            debtor_id: string,
            debt_period: number,
            debt_sum: number,
            description: string,
        }) =>
            request
                .post('/debt/create', data,
                    {
                        headers: {
                            Authorization: `Bearer ${token.token.access_token}`
                        }
                    }
                )
                .then((res) => res.data)
    })
}