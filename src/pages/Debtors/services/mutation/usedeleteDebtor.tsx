import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { useAppNotification } from "../../../../components/Modals/Notification/services/query/useNotification";

const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
const accessToken = tokenData.token?.access_token;

export const useDeleteDebtor = () => {
    const queryClient = useQueryClient();
const notification = useAppNotification();
    return useMutation({
        mutationFn: async (id: string) => {
            return request
                .delete(`/debtor/${id}`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                .then((res) => res.data)
                .catch((error) => {
                    notification.error({
                        message:"O'chirishda xatolik:", 
                        description: `${error.response?.data?.error?.message}`,
                    });
                    throw error;
                });
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['debtors'] }); // ⚡️ Ro‘yxatni yangilash
        },
    });
};
