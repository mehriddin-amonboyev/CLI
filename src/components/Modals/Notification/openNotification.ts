import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export const openNotification = (
    type: NotificationType,
    message?: string,
    description?: string
) => {
    notification[type]({
        message: message || "Amaliyot muvaffaqiyatli!",
        description: description || "Jarayon muvaffaqiyatli bajarildi.",
    });
};
