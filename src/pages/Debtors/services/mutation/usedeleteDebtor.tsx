import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
const accessToken = tokenData.token?.access_token;

export const useDeleteDebtor = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: string) => {
            return request
                .delete(`/debtor/${id}`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                .then((res) => res.data)
                .catch((error) => {
                    console.error("🛑 O'chirishda xatolik:", error);
                    throw error;
                });
        },

        onSuccess: () => {
            console.log("✅ Qarzdor muvaffaqiyatli o‘chirildi!");
            queryClient.invalidateQueries({ queryKey: ['debtors'] }); // ⚡️ Ro‘yxatni yangilash
        },
    });
};
