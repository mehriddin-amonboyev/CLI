import { Button, Form, Input, notification } from "antd";
import { UploadCard } from "./components/upload-card";
import { UploadPassport } from "./components/upload-passport";
import { useCreateDebtor } from "./service/mutation/useCreateDebtor";

interface FormValues {
    id: string,
    full_name: string;
    address: string;
    description: string;
}
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const Filed = () => {
    const createDebtorMutation = useCreateDebtor();
    
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: "Muvaffaqiyatli qo'shildi",
            description:
                "Qarzdor muvaffaqiyatli qo'shildi",
        });
    };
    
    const onFinish = (values: FormValues) => {
        const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
        const store_id = tokenData.token?.store_id;
        openNotificationWithIcon('success')
        if (store_id) {
            createDebtorMutation.mutate({ ...values, store_id }, {
                onSuccess: (data) => {

                    console.log("Successful:", data);
                },
                onError: (error) => {
                    console.log("Uploadda xatolik bor:", error.message);
                }
            });
        } else {
            console.error("Store ID topilmadi!");
        }
    };

    return (
        <>
            {contextHolder}
            <Form layout="vertical" onFinish={onFinish} style={{ width: '50%' }}>
                <Form.Item
                    label="Ism Familiya"
                    name="full_name"
                    rules={[{ required: true, message: "Ism Familiyani kiriting!" }]}
                >
                    <Input placeholder="Test Testov" />
                </Form.Item>

                <Form.Item
                    label="Yashash manzili"
                    name="address"
                    rules={[{ required: true, message: "Yashash manzilini kiriting!" }]}
                >
                    <Input placeholder="Yashnabod, Kadisheva b. S3.56-uy" />
                </Form.Item>

                <Form.Item
                    label="Eslatma"
                    name="description"
                    rules={[{ required: false }]}
                >
                    <Input placeholder="Affirislarga qoldi kunim" />
                </Form.Item>

                {/* Fayl yuklash komponentlari (Kerak bo'lsa oching) */}
                {/* <UploadCard />
            <UploadPassport /> */}

                {/* Yuborish tugmasi */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Kiritish
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};